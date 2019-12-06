import {TipologiaRuolo} from './tipologiaRuolo.model';

export class Utente {
    id: bigint;
    nome: string;
    cognome: string;
    email: string;
    password: string;
   ruolo: TipologiaRuolo;
    partite_totali: number;
    telefono: string;
    descrizione: string;
}
