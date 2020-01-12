import {Injectable} from '@angular/core';
import {Partita} from '../model/partita.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {URL} from '../constants';
import {Observable} from 'rxjs';
import {TipologiaPartita} from '../model/tipologiaPartita.model';
import {Utente} from '../model/utente.model';
import {Feedback} from "../model/feedback.model";

@Injectable({
    providedIn: 'root'
})

export class PartitaService {

    constructor(private http: HttpClient) {
    }

    findById(partitaId: number): Observable<Partita> {
        const apiURL = `${URL.DETTAGLIOPARTITA}/${partitaId}`;
        return this.http.get<Partita>(apiURL);
    }

    tipoPartita(): Observable<TipologiaPartita[]> {
        return this.http.get<TipologiaPartita[]>(URL.TIPOLOGIAPARTITA);
    }

    createPartita(partita: Partita): Observable<Partita> {
        return this.http.post<Partita>(URL.NUOVAPARTITA, partita);
    }

    lista(): Observable<Partita[]> {
        return this.http.get<Partita[]>(URL.PARTITE);
    }

    partecipazioneOrg() {
        return this.http.get(URL.PARTECIPAZIONEORG);
    }

    miePartite(): Observable<Partita[]> {
        return this.http.get<Partita[]>(URL.MIEPARTITE);
    }

    terminate(): Observable<Partita[]> {
        return this.http.get<Partita[]>(URL.PARTITETERMINATE);
    }

    giocatori(partitaId: number): Observable<Utente[]> {
        const apiURL = `${URL.GIOCATORI}/${partitaId}`;
        return this.http.get<Utente[]>(apiURL);
    }

    cancellaPartita(partitaID: number) {
        const apiURL = `${URL.CANCELLAPARTITA}/${partitaID}`;
        return this.http.delete(apiURL);
    }

    partecipa(partitaID: number) {
        const apiURL = `${URL.PARTECIPA}/${partitaID}`;
        return this.http.get(apiURL);
    }

    cancellaPartecipazione(partitaID: number) {
        const apiURL = `${URL.RIMUOVIPARTECIPAZIONE}/${partitaID}`;
        return this.http.delete(apiURL);
    }

    controlloPartecipazione(partitaID: number) {
        const apiURL = `${URL.CONTROLLOPARTECIPAZIONE}/${partitaID}`;
        return this.http.get(apiURL);
    }

    findGiocatori(partitaID: number): Observable<Utente[]> {
        const apiURL = `${URL.FEEDBACKPARTITA}/${partitaID}`;
        return this.http.get<Utente[]>(apiURL);
    }

    lasciaFeedback(feedback: Feedback) {
        const params = new HttpParams()
            .set('commento', feedback.commento)
            .set('voto', feedback.voto.toString())
            .set('id_giocatore_votato', feedback.id_giocatore_votato.id.toString())
            .set('id_partita', feedback.id_partita.id.toString());
        console.log(params);

        return this.http.post(URL.VOTAZIONE, params, {observe: 'response'});
    }

    checkFeedback(partita: Partita, giocatore: Utente): Observable<Feedback>{
        const params = new HttpParams()
            .set('id_giocatore', giocatore.id.toString())
            .set('id_partita', partita.id.toString());

        return this.http.post<Feedback>(URL.CHECKFEEDBACK, params);


    }

}
