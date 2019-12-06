import {Component, OnInit} from '@angular/core';
import {UtenteService} from "../../services/utente.service";
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-partite',
    templateUrl: './partite.page.html',
    styleUrls: ['./partite.page.scss'],
})
export class PartitePage implements OnInit {

    constructor(private utenteService: UtenteService,
                private navController: NavController) {
    }

    ngOnInit() {
    }

    onlogout() {
        this.utenteService.logout();
        this.navController.navigateRoot('/login');

    }
}
