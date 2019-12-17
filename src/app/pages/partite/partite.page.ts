import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';


@Component({
    selector: 'app-partite',
    templateUrl: './partite.page.html',
    styleUrls: ['./partite.page.scss'],
})
export class PartitePage implements OnInit {

    constructor(private nav: NavController) {
    }

    ngOnInit() {
    }

    nuova() {
        this.nav.navigateRoot('nuova-partita');
    }
}
