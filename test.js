/*
  login.js
  Implementação em JS puro para: tela de login + cadastro usando localStorage,
  verificação de usuários, validação de erros e proteção básica contra brute-force.

  Como usar (exemplo de IDs esperados no HTML, mas pode passar config em init):
    - Formulário de login com id="login-form"
      - input email id="login-email"
      - input password id="login-password"
      - button submit
      - div error id="login-error"
    - Formulário de registro com id="register-form"
      - input name id="register-name"
      - input email id="register-email"
      - input password id="register-password"
      - input confirm password id="register-password-confirm"
      - div error id="register-error"
    - Elemento para mostrar usuário logado id="user-panel"

  Este arquivo expõe globalmente `LoginApp` com métodos:
    - init(config)  -> inicializa e liga handlers (opcional)
    - logout()      -> desloga o usuário atual
    - getCurrentUser() -> retorna informações públicas do usuário logado (ou null)

  Observações de segurança:
    - Usa SHA-256 via SubtleCrypto (digest) + salt gerado com crypto.getRandomValues.
    - Ainda que melhor que plaintext, o armazenamento local não é 100% seguro;
      para produção use servidor seguro + autenticação apropriada.
*/

const LoginApp = (function () {
  const STORAGE_KEY = 'login_app_users_v1';
  const SESSION_KEY = 'login_app_session_v1';
  const FAIL_KEY = 'login_app_failed_v1';

  // Configurações padrão (IDs esperados no HTML)
  const DEFAULTS = {
    loginFormId: 'login-form',
    loginEmailId: 'login-email',
    loginPasswordId: 'login-password',
    loginErrorId: 'login-error',
    registerFormId: 'register-form',
    registerNameId: 'register-name',
    registerEmailId: 'register-email',
    registerPasswordId: 'register-password',
    registerPasswordConfirmId: 'register-password-confirm',
    registerErrorId: 'register-error',
    userPanelId: 'user-panel',
    rememberCheckboxId: 'login-remember',
    maxFailedAttempts: 5,
    lockMinutes: 15,
  };

  // --- Helpers ---
  const $ = (id) => document.getElementById(id);

  function loadUsers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error('Erro ao ler users do localStorage', e);
      return {};
    }
  }

  function saveUsers(obj) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  function loadSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error('Erro ao ler session', e);
      return null;
    }
  }

  function saveSession(sessionObj, remember) {
    const target = remember ? localStorage : sessionStorage;
    target.setItem(SESSION_KEY, JSON.stringify(sessionObj));
  }

  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }

  function loadFailed() {
    try {
      const raw = localStorage.getItem(FAIL_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveFailed(obj) {
    localStorage.setItem(FAIL_KEY, JSON.stringify(obj));
  }

  function isLocked(email, config) {
    const failed = loadFailed();
    const rec = failed[email];
    if (!rec) return false;
    if (rec.count < config.maxFailedAttempts) return false;
    const lockedAt = rec.lockedAt;
    if (!lockedAt) return false;
    const lockedUntil = new Date(lockedAt).getTime() + config.lockMinutes * 60 * 1000;
    return Date.now() < lockedUntil;
  }

  function registerFailed(email, config) {
    const failed = loadFailed();
    if (!failed[email]) failed[email] = { count: 0, lastTry: null, lockedAt: null };
    failed[email].count += 1;
    failed[email].lastTry = new Date().toISOString();
    if (failed[email].count >= config.maxFailedAttempts) {
      failed[email].lockedAt = new Date().toISOString();
    }
    saveFailed(failed);
  }

  function resetFailed(email) {
    const failed = loadFailed();
    if (failed[email]) delete failed[email];
    saveFailed(failed);
  }

  function validateEmail(email) {
    if (!email || typeof email !== 'string') return false;
    // simples regex de validação (não perfeita, mas razoável)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePassword(password) {
    if (!password || typeof password !== 'string') return false;
    // Regras mínimas: 8+ chars, letra + número. Ajuste conforme necessidade.
    const okLength = password.length >= 8;
    const hasLetter = /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpace = /\s/.test(password);
    return okLength && hasLetter && hasNumber && !hasSpace;
  }

  function nowISO() {
    return new Date().toISOString();
  }

  // --- Crypto helpers ---
  // gera um salt (Uint8Array) e retorna como hex
  function generateSaltHex(len = 16) {
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    return bufferToHex(arr);
  }

  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) throw new Error('hex inválido');
    const len = hex.length / 2;
    const out = new Uint8Array(len);
    for (let i = 0; i < len; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  async function hashPasswordHex(password, saltHex) {
    // hash = SHA-256(salt + password)
    const saltBuf = hexToBuffer(saltHex);
    const pwBuf = new TextEncoder().encode(password);
    const combined = new Uint8Array(saltBuf.length + pwBuf.length);
    combined.set(saltBuf, 0);
    combined.set(pwBuf, saltBuf.length);
    const digest = await crypto.subtle.digest('SHA-256', combined.buffer);
    return bufferToHex(digest);
  }

  // --- Core actions ---
  async function createAccount({ name, email, password }) {
    const users = loadUsers();
    const emailLower = email.toLowerCase();
    if (users[emailLower]) {
      throw new Error('Já existe uma conta com esse email. Faça login ou use outro email.');
    }
    const salt = generateSaltHex(16);
    const hash = await hashPasswordHex(password, salt);
    const userObj = {
      name: name || '',
      email: emailLower,
      salt,
      hash,
      createdAt: nowISO(),
    };
    users[emailLower] = userObj;
    saveUsers(users);
    return { ...userObj, hash: undefined, salt: undefined };
  }

  async function authenticate({ email, password }, config) {
    const emailLower = email.toLowerCase();
    if (isLocked(emailLower, config)) {
      throw new Error(`Conta temporariamente bloqueada por tentativas falhas. Tente novamente mais tarde.`);
    }
    const users = loadUsers();
    const record = users[emailLower];
    if (!record) {
      // não vazamos se existe; porém para registro UX, retornamos erro genérico
      registerFailed(emailLower, config);
      throw new Error('Email ou senha inválidos.');
    }
    const computed = await hashPasswordHex(password, record.salt);
    if (computed !== record.hash) {
      registerFailed(emailLower, config);
      throw new Error('Email ou senha inválidos.');
    }
    // sucesso
    resetFailed(emailLower);
    const publicUser = { name: record.name, email: record.email, createdAt: record.createdAt };
    return publicUser;
  }

  // --- UI wiring ---
  function showError(elementOrId, message) {
    const el = typeof elementOrId === 'string' ? $(elementOrId) : elementOrId;
    if (!el) return;
    el.textContent = message || '';
    if (message) {
      el.style.display = 'block';
      el.setAttribute('aria-live', 'polite');
    } else {
      el.style.display = 'none';
      el.removeAttribute('aria-live');
    }
  }

  function showUserPanel(id, user) {
    const el = $(id);
    if (!el) return;
    if (!user) {
      el.innerHTML = '';
      return;
    }
    el.innerHTML = `
      <div class="logged"> 
        <div>Conectado como <strong>${escapeHtml(user.name || user.email)}</strong></div>
        <button type="button" id="logout-btn">Sair</button>
      </div>
    `;
    const btn = el.querySelector('#logout-btn');
    if (btn) btn.addEventListener('click', () => { clearSession(); renderLogged(null); });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderLogged(user) {
    // atualiza interface conforme usuário
    showUserPanel(currentConfig.userPanelId, user);
  }

  // store config and expose some state
  let currentConfig = { ...DEFAULTS };

  function mergeConfig(cfg) {
    currentConfig = { ...currentConfig, ...(cfg || {}) };
  }

  // Handlers (assumem elementos presentes)
  function attachHandlers() {
    const loginForm = $(currentConfig.loginFormId);
    const regForm = $(currentConfig.registerFormId);

    if (loginForm) {
      loginForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const email = $(currentConfig.loginEmailId)?.value?.trim() || '';
        const password = $(currentConfig.loginPasswordId)?.value || '';
        const remember = $(currentConfig.rememberCheckboxId)?.checked || false;
        try {
          showError(currentConfig.loginErrorId, '');
          if (!validateEmail(email)) throw new Error('Email inválido.');
          if (!password) throw new Error('Senha é obrigatória.');
          const user = await authenticate({ email, password }, currentConfig);
          saveSession({ user, loggedAt: nowISO() }, remember);
          // limpa forms
          loginForm.reset();
          renderLogged(user);
        } catch (err) {
          showError(currentConfig.loginErrorId, err.message || 'Erro ao logar.');
        }
      });
    }

    if (regForm) {
      regForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const name = $(currentConfig.registerNameId)?.value?.trim() || '';
        const email = $(currentConfig.registerEmailId)?.value?.trim() || '';
        const password = $(currentConfig.registerPasswordId)?.value || '';
        const confirm = $(currentConfig.registerPasswordConfirmId)?.value || '';
        try {
          showError(currentConfig.registerErrorId, '');
          if (!name) throw new Error('Nome é obrigatório.');
          if (!validateEmail(email)) throw new Error('Email inválido.');
          if (!validatePassword(password)) throw new Error('Senha fraca. Precisar ter ao menos 8 caracteres, letras e números, sem espaços.');
          if (password !== confirm) throw new Error('As senhas não coincidem.');
          const user = await createAccount({ name, email, password });
          // auto login após criação
          saveSession({ user, loggedAt: nowISO() }, false);
          regForm.reset();
          renderLogged(user);
        } catch (err) {
          showError(currentConfig.registerErrorId, err.message || 'Erro ao criar conta.');
        }
      });
    }

    // preenchimento automático se sessão existe
    const session = loadSession();
    if (session && session.user) {
      renderLogged(session.user);
    }
  }

  // API pública
  return {
    init: function (cfg) {
      mergeConfig(cfg);
      // aguarda DOM
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachHandlers);
      } else {
        attachHandlers();
      }
    },
    logout: function () {
      clearSession();
      renderLogged(null);
    },
    getCurrentUser: function () {
      const session = loadSession();
      return session ? session.user : null;
    },
  };
})();

// auto export to global
window.LoginApp = LoginApp;

// --- Fim do arquivo ---
