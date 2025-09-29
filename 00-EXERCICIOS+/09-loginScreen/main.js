
//main.js
// * significa importar tudo que é exportado no outro arquivo

import * as storage from './storage.js';
import * as Auth from './auth.js';
import * as UI from './ui.js';

//DEFAULTS guarda valores de IDs e elementos para caso seja alterado algo no HTML não precise alterar todos ids em JS

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
}

//Criar uma cópia com Spread operator(...)
//Faz uma cópia superfícial "shallow copy" para que as alterações feitas em currentConfig não afetem DEFAULTS.

let currentConfig = {...DEFAULTS}

// A função atualiza currentConfig com o valor que vier em 'cfg', mas mantém os valores antigos passados

function mergeConfig(cfg) {
    currentConfig = {...currentConfig, ...(cfg || {})}
}

//
