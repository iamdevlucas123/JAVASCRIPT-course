# Estrutura Modular para LoginApp

O código do LoginApp pode ser dividido em módulos para facilitar manutenção e organização. Abaixo está uma proposta de modularização usando ES Modules.

## Arquivos sugeridos

### 1. `storage.js`
Responsável por manipulação de `localStorage` e `sessionStorage`.
```js
// storage.js
export function loadUsers() { /* ... */ }
export function saveUsers(obj) { /* ... */ }
export function loadSession() { /* ... */ }
export function saveSession(sessionObj, remember) { /* ... */ }
export function clearSession() { /* ... */ }
export function loadFailed() { /* ... */ }
export function saveFailed(obj) { /* ... */ }
```

### 2. `cryptoUtils.js`
Funções de hashing e geração de salt.
```js
// cryptoUtils.js
export function generateSaltHex(len = 16) { /* ... */ }
export function bufferToHex(buffer) { /* ... */ }
export function hexToBuffer(hex) { /* ... */ }
export async function hashPasswordHex(password, saltHex) { /* ... */ }
```

### 3. `validation.js`
Funções de validação de email e senha.
```js
// validation.js
export function validateEmail(email) { /* ... */ }
export function validatePassword(password) { /* ... */ }
```

### 4. `auth.js`
Funções de autenticação, registro e controle de tentativas falhas.
```js
// auth.js
import { loadUsers, saveUsers, loadFailed, saveFailed, clearSession } from './storage.js';
import { hashPasswordHex, generateSaltHex } from './cryptoUtils.js';
import { validateEmail, validatePassword } from './validation.js';

export async function createAccount({ name, email, password }) { /* ... */ }
export async function authenticate({ email, password }, config) { /* ... */ }
export function isLocked(email, config) { /* ... */ }
export function registerFailed(email, config) { /* ... */ }
export function resetFailed(email) { /* ... */ }
```

### 5. `ui.js`
Funções de interface: mostrar erros e painel de usuário.
```js
// ui.js
export function showError(elementOrId, message) { /* ... */ }
export function showUserPanel(id, user) { /* ... */ }
export function escapeHtml(str) { /* ... */ }
```

### 6. `main.js`
Arquivo principal que inicializa o app e conecta UI + auth.
```js
// main.js
import * as Auth from './auth.js';
import * as UI from './ui.js';
import { loadSession, saveSession } from './storage.js';

const DEFAULTS = { /* ... */ };

export const LoginApp = { init(cfg) { /* ... */ }, logout() { /* ... */ }, getCurrentUser() { /* ... */ } };
window.LoginApp = LoginApp;
```

## Como usar
No HTML:
```html
<script type="module" src="main.js"></script>
```

Isso mantém cada parte do código focada em sua responsabilidade e facilita testes e manutenção.
