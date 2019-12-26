import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Partita} from '../../model/partita.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PartitaService} from '../../services/partita.service';
import {Utente} from "../../model/utente.model";
import {UtenteService} from "../../services/utente.service";
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-dettaglio-partita',
    templateUrl: './dettaglio-partita.page.html',
    styleUrls: ['./dettaglio-partita.page.scss'],
})
export class DettaglioPartitaPage implements OnInit {
    private partita$: Observable<Partita>;
    private utente$: BehaviorSubject<Utente>;
    private partecipanti$: Observable<Utente[]>;
    private Ifpartecipa;




    constructor(private activatedRoute: ActivatedRoute,
                private partitaService: PartitaService,
                private utenteService: UtenteService,
                private navController: NavController) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.utente$ = this.utenteService.getUtente();
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.partita$ = this.partitaService.findById(parseInt(params.get('id'), 0));
            this.partecipanti$ = this.partitaService.giocatori(parseInt(params.get('id'), 0));
            this.partitaService.controlloPartecipazione(parseInt(params.get('id'), 0)).subscribe(res => {
                this.Ifpartecipa = res;
            });
        });
    }


    onDelete(partita: Partita) {
        this.partitaService.cancellaPartita(partita.id).subscribe();
        this.navController.navigateRoot('/tabs/partite');

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
