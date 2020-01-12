import {Component, OnInit} from '@angular/core';
import {PartitaService} from '../../services/partita.service';
import {Observable} from 'rxjs';
import {Partita} from '../../model/partita.model';
import {DettaglioPartitaComponent} from '../../components/dettaglio-partita.component';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-mie-partite',
    templateUrl: './mie-partite.page.html',
    styleUrls: ['./mie-partite.page.scss'],
})
export class MiePartitePage implements OnInit {
    private miepartite$: Observable<Partita[]>;
    private terminate$: Observable<Partita[]>;

    constructor(private partitaService: PartitaService,
                private modalController: ModalController) {
    }

    ionViewWillEnter() {
        this.miepartite$ = this.partitaService.miePartite();
        this.terminate$ = this.partitaService.terminate();
    }

    ngOnInit() {
    }

    async apriDettaglio(partita: Partita) {
        const modal = await this.modalController.create({
            component: DettaglioPartitaComponent,
            componentProps: {appParam: partita}
        });
        modal.onDidDismiss().then(() => this.miepartite$ = this.partitaService.miePartite());
        return await modal.present();
    }

}
