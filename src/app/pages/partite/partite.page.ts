import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {PartitaService} from '../../services/partita.service';
import {Partita} from '../../model/partita.model';
import {Observable} from 'rxjs';
import {DettaglioPartitaPage} from '../dettaglio-partita/dettaglio-partita.page';


@Component({
    selector: 'app-partite',
    templateUrl: './partite.page.html',
    styleUrls: ['./partite.page.scss'],
})
export class PartitePage implements OnInit {
    private partite$: Observable<Partita[]>;


    constructor(private nav: NavController,
                private partitaService: PartitaService,
                private modalController: ModalController) {
    }


    ngOnInit() {
        this.partite$ = this.partitaService.lista();
        console.log('ciao');
    }


    reload(event) {
        setTimeout(() => {
            event.target.complete();
        }, 2000);

        this.partite$ = this.partitaService.lista();
    }

    nuovaPartita() {
        this.nav.navigateRoot('/nuova-partita');
    }

    async apriDettaglio(partita: Partita) {
        const modal = await this.modalController.create({
            component: DettaglioPartitaPage,
            componentProps: {appParam: partita}
        });
        modal.onDidDismiss().then(() => this.partite$ = this.partitaService.lista());
        return await modal.present();

    }
}
