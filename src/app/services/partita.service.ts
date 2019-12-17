import {Injectable} from '@angular/core';
import {Partita} from '../model/partita.model';
import {HttpClient} from '@angular/common/http';
import { URL } from '../constants';

@Injectable({
    providedIn: 'root'
})

export class PartitaService {

    constructor(private http: HttpClient) {
    }

    createPartita(partita: Partita) {
        return this.http.post<Partita>(URL.NUOVAPARTITA, partita);
    }

}
