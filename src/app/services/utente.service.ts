import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {AUTH_TOKEN, URL, UTENTE_STORAGE, X_AUTH} from '../constants';
import {Utente} from '../model/utente.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TipologiaRuolo} from '../model/tipologiaRuolo.model';
import {Feedback} from '../model/feedback.model';


export interface LoginAccount {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class UtenteService {
    private authToken: string;
    private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private utente$: BehaviorSubject<Utente> = new BehaviorSubject<Utente>({} as Utente);

    constructor(private http: HttpClient, private storage: Storage) {

        this.storage.get(AUTH_TOKEN).then((token) => {
            this.authToken = token;
            if (token !== null && token !== undefined && token !== '') {
                this.loggedIn$.next(true);

            }
        });
        this.storage.get(UTENTE_STORAGE).then((utente) => {
            this.utente$.next(utente);
        });

    }

    login(loginAccount: LoginAccount): Observable<Utente> {

        return this.http.post<Utente>(URL.LOGIN, loginAccount, {observe: 'response'}).pipe(
            map((resp: HttpResponse<Utente>) => {
                const token = resp.headers.get(X_AUTH);
                this.storage.set(AUTH_TOKEN, token);
                this.authToken = token;
                // Utente memorizzato nello storage in modo tale che se si vuole cambiare il
                // profilo dell'utente stesso non si fa una chiamata REST.
                this.storage.set(UTENTE_STORAGE, resp.body);
                // update dell'observable dell'utente
                this.utente$.next(resp.body);
                this.loggedIn$.next(true);
                return resp.body;

            }));
    }

    logout() {
        this.authToken = null;
        this.loggedIn$.next(false);
        this.utente$.next(null);
        this.storage.remove(AUTH_TOKEN);
        this.storage.remove(UTENTE_STORAGE);
    }

    getUtente(): BehaviorSubject<Utente> {
        return this.utente$;
    }

    getAuthToken(): string {
        return this.authToken;
    }

    isLogged(): Observable<boolean> {
        return this.loggedIn$.asObservable();
    }


    signUp(account: Utente) {
        const params = new HttpParams()
            .set('nome', account.nome)
            .set('cognome', account.cognome)
            .set('email', account.email)
            .set('password', account.password)
            .set('telefono', account.telefono)
            .set('nome_ruolo', account.id_ruolo.nome_ruolo);

        return this.http.post<Utente>(URL.SIGNUP, params, {observe: 'response'}).pipe(
            map((resp: HttpResponse<Utente>) => {
                }
            ));


    }

    ruoloGiocatore(): Observable<TipologiaRuolo[]> {
        return this.http.get<TipologiaRuolo[]>(URL.RUOLOGIOCATORE);
    }

    aggiungiDescrizione(descrizione) {
        const params = new HttpParams()
            .set('descrizione', descrizione);

        return this.http.post<Utente>(URL.AGGIUNGIDESCRIZIONE, params, {observe: 'response'});
    }

    listaCommenti(): Observable<Feedback[]> {
        return this.http.get<Feedback[]>(URL.COMMENTI);

    }

    getMedia() {
        return this.http.get(URL.GETMEDIA);
    }

}
