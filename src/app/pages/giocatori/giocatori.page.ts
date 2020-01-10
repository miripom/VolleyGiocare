import {Component, OnInit} from '@angular/core';
import {Utente} from '../../model/utente.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PartitaService, Votazione} from '../../services/partita.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DettaglioPartitaPage} from '../dettaglio-partita/dettaglio-partita.page';
import {ModalController} from '@ionic/angular';
import {FeedbackPage} from '../feedback/feedback.page';

@Component({
    selector: 'app-giocatori',
    templateUrl: './giocatori.page.html',
    styleUrls: ['./giocatori.page.scss'],
})
export class GiocatoriPage implements OnInit {
    private giocatori$: Observable<Utente[]>;

    constructor(private activatedRoute: ActivatedRoute,
                private partitaService: PartitaService,
                private modalController: ModalController
               ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.giocatori$ = this.partitaService.findGiocatori(parseInt(params.get('id'), 0));
        });
    }

    /*vota(idGiocatore) {
        const votazione: Votazione = this.ratingFormModel.value;
        votazione.voto = this.ratingFormModel.get('voto').value;
        votazione.idGiocatore = idGiocatore;
        this.partitaService.vota(votazione).subscribe();
    }*/

    async apriVotazione(giocatore: Utente) {
        const modal = await this.modalController.create({
            component: FeedbackPage,
            cssClass: 'my-custom-modal-css',
            componentProps: {appParam: giocatore}
        });
        return await modal.present();
    }
}
