import {Component, OnInit} from '@angular/core';
import {Utente} from '../../model/utente.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PartitaService} from '../../services/partita.service';
import {ModalController} from '@ionic/angular';
import {FeedbackPage} from '../feedback/feedback.page';
import {Partita} from '../../model/partita.model';

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
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.giocatori$ = this.partitaService.findGiocatori(parseInt(params.get('id'), 0));
        });
    }

    async apriVotazione(giocatore: Utente) {
        const partita = new Partita();
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            partita.id = parseInt(params.get('id'), 0);
        });
        const modal = await this.modalController.create({
            component: FeedbackPage,
            cssClass: 'my-custom-modal-css',
            componentProps: {appParam: giocatore.id, partitaParam: partita}
        });
        return await modal.present();


    }
}
