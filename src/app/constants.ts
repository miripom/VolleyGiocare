export const LINGUA = 'lingua';

export const X_AUTH = 'token';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? '/api' : 'http://127.0.0.1:8000';


export const URL = {
    SIGNUP: URL_BASE + '/auth/register',
    LOGIN: URL_BASE + '/auth/login',
    NUOVAPARTITA: URL_BASE + '/newMatch',
    TIPOLOGIAPARTITA: URL_BASE + '/match_types',
    RUOLOGIOCATORE: URL_BASE + '/role_types',
    PARTITE: URL_BASE + '/matches',
    PARTECIPAZIONEORG: URL_BASE + '/partecipationOrg',
    DETTAGLIOPARTITA: URL_BASE + '/matchD',
    MIEPARTITE: URL_BASE + '/mymatches',
    PARTITETERMINATE: URL_BASE + '/terminated',
    AGGIUNGIDESCRIZIONE: URL_BASE + '/updateDescription',
    GIOCATORI: URL_BASE + '/players',
    CANCELLAPARTITA: URL_BASE + '/deletematch',
    PARTECIPA: URL_BASE + '/partecipation',
    RIMUOVIPARTECIPAZIONE: URL_BASE + '/deletePartecipation',
    CONTROLLOPARTECIPAZIONE: URL_BASE + '/checkPartecipation'



};
