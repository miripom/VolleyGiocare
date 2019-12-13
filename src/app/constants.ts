export const LINGUA = 'lingua';

export const X_AUTH = 'token';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? '/api' : 'http://127.0.0.1:8000';


export const URL = {
    SIGNUP: URL_BASE + '/auth/register',
    LOGIN: URL_BASE + '/auth/login'


};
