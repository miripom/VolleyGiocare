import {Component, OnInit} from '@angular/core';
import {UtenteService} from '../../services/utente.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {AlertController, IonInfiniteScroll, NavController} from '@ionic/angular';
import {Feedback} from '../../model/feedback.model';


@Component({
    selector: 'app-profilo',
    templateUrl: './profilo.page.html',
    styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {
    private feedback$: Observable<Feedback[]>;
    private utente$: BehaviorSubject<Utente>;
    private infiniteScroll: IonInfiniteScroll;
    private feedback;
    private index = 0;
    private i;
    uno = 0;
    due = 0;
    tre = 0;
    quattro = 0;
    cinque = 0;
    private voti: Array<number> = [1, 1, 1, 1, 4, 1, 5, 5, 5, 4, 2, 2, 2, 1, 1];
    private numero: string;
    private data: Array<string> = ['ciao', 'a', 'b', 'c', 'd', 'e'];

    constructor(private utenteService: UtenteService, private navCtrl: NavController, private alertController: AlertController) {
    }

    ngOnInit() {
        this.feedback$ = this.utenteService.listaCommenti();


        for (this.i = 0; this.i < this.voti.length; this.i++) {
            this.index = this.index + this.voti[this.i];
            if (this.voti[this.i] === 1) {
                this.uno++;
            }
            if (this.voti[this.i] === 2) {
                this.due++;
            }
            if (this.voti[this.i] === 3) {
                this.tre++;
            }
            if (this.voti[this.i] === 4) {
                this.quattro++;
            }
            if (this.voti[this.i] === 5) {
                this.cinque++;
            }
        }
        this.uno = this.uno / 10;
        this.due = this.due / 10;
        this.tre = this.tre / 10;
        this.quattro = this.quattro / 10;
        this.cinque = this.cinque / 10;
        this.numero = (this.index / this.i).toFixed(1);
        this.index = this.index / this.i;

        this.utente$ = this.utenteService.getUtente();
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.data.length === 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }

    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }

    async update() {

        const alert = await this.alertController.create({
                message: 'Modifica Descrizione',
                inputs: [{
                    name: 'descrizione',
                    placeholder: 'Modifica descrizione'
                }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Salva',
                        handler: data => {
                            this.utenteService.aggiungiDescrizione(data['descrizione']).subscribe(res => {
                                this.utente$.getValue().descrizione = res.body['data'];
                            });
                        }

                    }
                ]
            }
        );
        await alert.present();
    }
}
