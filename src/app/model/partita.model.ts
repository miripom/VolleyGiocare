import {TipologiaPartita} from './tipologiaPartita.model';
import {Utente} from './utente.model';

export class Partita {

    id: number;
    tipologia_partita: TipologiaPartita;
    organizzatore: Utente;
    titolo: string;
    descrizione: string;
    data_ora: Date;
    luogo: string;
    giocatori_richiesti: number;

}
