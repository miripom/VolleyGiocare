import {Component, OnInit} from '@angular/core';
import {UtenteService} from '../../services/utente.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {AlertController, NavController} from '@ionic/angular';
import {Feedback} from '../../model/feedback.model';


@Component({
    selector: 'app-profilo',
    templateUrl: './profilo.page.html',
    styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {

    private feedback$: Observable<Feedback[]>;
    private utente$: BehaviorSubject<Utente>;
    private media;

    constructor(private utenteService: UtenteService,
                private navCtrl: NavController,
                private alertController: AlertController) {
    }

    ngOnInit() {
        this.feedback$ = this.utenteService.listaCommenti();
        this.utente$ = this.utenteService.getUtente();
        this.utenteService.getMedia().subscribe(res => {
            this.media = res;
        });
    }

    loadData(event) {
        setTimeout(() => {
            event.target.complete();
        }, 500);
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
                        text: 'Annulla',
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
