import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Partita} from '../../model/partita.model';
import {PartitaService} from '../../services/partita.service';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';
import {TipologiaPartita} from '../../model/tipologiaPartita.model';
import {Observable} from 'rxjs';
import {NavController} from '@ionic/angular';


@Component({
    selector: 'app-nuova-partita',
    templateUrl: './nuova-partita.page.html',
    styleUrls: ['./nuova-partita.page.scss'],
})
export class NuovaPartitaPage implements OnInit {
    private newMatchFormModel: FormGroup;
    private utente = new Utente();
    private tipoPartita: Observable<TipologiaPartita[]>;
    private minDate = new Date().toISOString();


    constructor(private formBuilder: FormBuilder,
                private partitaService: PartitaService,
                private utenteService: UtenteService,
                private navController: NavController) {
    }

    ngOnInit() {

        this.tipoPartita = this.partitaService.tipoPartita();


        this.newMatchFormModel = this.formBuilder.group({
            titolo: ['', Validators.compose([
                Validators.required
            ])],
            luogo: ['', Validators.compose([
                Validators.required
            ])],
            descrizione: ['', Validators.compose([
                Validators.required
            ])],
            data_ora: ['', Validators.compose([
                Validators.required
            ])],
            tipologia: ['Volley', Validators.compose([
                Validators.required
            ])],
            giocatori_richiesti: ['', Validators.compose([
                Validators.required
            ])],
            organizzatore: ''
        });
    }

    onCreateNewMatch() {
        this.utenteService.getUtente().subscribe(res => {
            this.utente = res;
        });
        this.newMatchFormModel.patchValue({organizzatore: this.utente.id});
        const partita: Partita = this.newMatchFormModel.value;
        console.table(partita);

        this.partitaService.createPartita(partita).subscribe();
        this.newMatchFormModel.reset();
        this.navController.navigateRoot('/tabs/partite');
    }

}
