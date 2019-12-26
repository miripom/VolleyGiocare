import {TipologiaRuolo} from './tipologiaRuolo.model';

export class Utente {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    password: string;
    id_ruolo: TipologiaRuolo;
    partite_totali: number;
    telefono: string;
    descrizione: string;

    voto: number;
}
