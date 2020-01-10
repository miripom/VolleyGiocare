import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ModalController, NavParams} from '@ionic/angular';
import {Utente} from '../../model/utente.model';
import {BehaviorSubject} from 'rxjs';
import {UtenteService} from '../../services/utente.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Feedback, PartitaService} from '../../services/partita.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.page.html',
    styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
    private votazioneFormModel: FormGroup;
    private color: any = {color1: '', color2: '', color3: '', color4: '', color5: ''};
    private giocatore: Utente;
    private utente$: BehaviorSubject<Utente>;
    private numeroStelle: number;

    constructor(private formBuilder: FormBuilder,
                private modalController: ModalController,
                private activatedRoute: ActivatedRoute,
                private utenteService: UtenteService,
                private navParams: NavParams,
                private partitaService: PartitaService
    ) {

    }

    ngOnInit() {

        this.votazioneFormModel = this.formBuilder.group({
            commento: new FormControl(),
            stelle: new FormControl()
        });
    }

    async chiudiModal() {
        await this.modalController.dismiss();
    }

    starUno(event) {
        this.color.color1 = 'primary';
        this.color.color2 = '';
        this.color.color3 = '';
        this.color.color4 = '';
        this.color.color5 = '';
        this.numeroStelle = 1;
        this.votazioneFormModel.patchValue({stelle: this.numeroStelle});
    }

    starDue(event) {
        this.color.color1 = 'primary';
        this.color.color2 = 'primary';
        this.color.color3 = '';
        this.color.color4 = '';
        this.color.color5 = '';
        this.numeroStelle = 2;
        this.votazioneFormModel.patchValue({stelle: this.numeroStelle});
    }

    starTre(event) {
        this.color.color1 = 'primary';
        this.color.color2 = 'primary';
        this.color.color3 = 'primary';
        this.color.color4 = '';
        this.color.color5 = '';
        this.numeroStelle = 3;
        this.votazioneFormModel.patchValue({stelle: this.numeroStelle});
    }

    starQuattro(event) {
        this.color.color1 = 'primary';
        this.color.color2 = 'primary';
        this.color.color3 = 'primary';
        this.color.color4 = 'primary';
        this.color.color5 = '';
        this.numeroStelle = 4;
        this.votazioneFormModel.patchValue({stelle: this.numeroStelle});
    }

    starCinque(event) {
        this.color.color1 = 'primary';
        this.color.color2 = 'primary';
        this.color.color3 = 'primary';
        this.color.color4 = 'primary';
        this.color.color5 = 'primary';
        this.numeroStelle = 5;
        this.votazioneFormModel.patchValue({stelle: this.numeroStelle});
    }

    reset() {
        this.color.color1 = '';
        this.color.color2 = '';
        this.color.color3 = '';
        this.color.color4 = '';
        this.color.color5 = '';

        this.votazioneFormModel.reset();
    }

   async vota() {
        const votazione: Feedback = this.votazioneFormModel.value;
        votazione.giocatoreVotato = this.navParams.data.appParam;
        votazione.partita = this.navParams.data.partitaId;
        console.log(votazione.giocatoreVotato);

        this.partitaService.lasciaFeedback(votazione).subscribe();
        await this.modalController.dismiss();

    }
}
