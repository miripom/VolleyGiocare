import {Component, Inject, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Partita} from '../../model/partita.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PartitaService} from '../../services/partita.service';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';
import {ModalController, NavController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-dettaglio-partita',
    templateUrl: './dettaglio-partita.page.html',
    styleUrls: ['./dettaglio-partita.page.scss'],
})
export class DettaglioPartitaPage implements OnInit {
    private partita: Partita;
    private partita$: Observable<Partita>;
    private utente$: BehaviorSubject<Utente>;
    private partecipanti$: Observable<Utente[]>;
    private Ifpartecipa;


    constructor(private modalController: ModalController,
                private partitaService: PartitaService,
                private utenteService: UtenteService,
                private navController: NavController,
                private navParams: NavParams) {
    }

    ngOnInit() {
        this.partita = this.navParams.data.appParam;
        console.log(this.partita.id);

        this.utente$ = this.utenteService.getUtente();
        this.partita$ = this.partitaService.findById(this.partita.id);
        this.partecipanti$ = this.partitaService.giocatori(this.partita.id);
        this.partitaService.controlloPartecipazione(this.partita.id).subscribe(res => {
            this.Ifpartecipa = res;
        });
    }


    async onDelete(partita: Partita) {
        this.partitaService.cancellaPartita(partita.id).subscribe(() => this.partitaService.lista());
        await this.modalController.dismiss();

    }

    onPartecipa(partita: Partita) {

        this.partitaService.partecipa(partita.id).subscribe();
        this.navController.navigateRoot('/tabs/partite');
    }

    rimuoviPartecipazione(partita: Partita) {
        this.partitaService.cancellaPartecipazione(partita.id).subscribe();
        this.navController.navigateRoot('/tabs/partite');
    }
}
