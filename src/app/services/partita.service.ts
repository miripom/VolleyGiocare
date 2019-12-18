import {Injectable} from '@angular/core';
import {Partita} from '../model/partita.model';
import {HttpClient} from '@angular/common/http';
import { URL } from '../constants';
import {TipologiaPartita} from "../model/tipologiaPartita.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PartitaService {

    constructor(private http: HttpClient) {
    }

    tipoPartita() {
        return this.http.get<TipologiaPartita>(URL.TIPOLOGIAPARTITA);
    }

    createPartita(partita: Partita) {
        return this.http.post<Partita>(URL.NUOVAPARTITA, partita);
    }

}
