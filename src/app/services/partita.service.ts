import {Injectable} from '@angular/core';
import {Partita} from '../model/partita.model';
import {HttpClient} from '@angular/common/http';
import {URL} from '../constants';
import {Observable} from 'rxjs';
import {TipologiaPartita} from '../model/tipologiaPartita.model';


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

}
