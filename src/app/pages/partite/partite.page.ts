import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {PartitaService} from '../../services/partita.service';
import {Partita} from '../../model/partita.model';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-partite',
    templateUrl: './partite.page.html',
    styleUrls: ['./partite.page.scss'],
})
export class PartitePage implements OnInit {
    private partite$: Observable<Partita[]>;


    constructor(private nav: NavController,
                private partitaService: PartitaService) {
    }

    ionViewWillEnter() {
        this.partite$ = this.partitaService.lista();
    }

    ngOnInit() {
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
}
