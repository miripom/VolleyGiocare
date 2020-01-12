import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {PartitaService} from '../../services/partita.service';
import {Partita} from '../../model/partita.model';
import {Observable} from 'rxjs';
import {DettaglioPartitaComponent} from '../../components/dettaglio-partita.component';


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
    }

    ionViewWillEnter() {
        this.partite$ = this.partitaService.lista();
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
            component: DettaglioPartitaComponent,
            componentProps: {appParam: partita}
        });
        modal.onDidDismiss().then(() => this.partite$ = this.partitaService.lista());
        return await modal.present();

    }
}
