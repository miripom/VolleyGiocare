import {Component, OnInit} from '@angular/core';
import {Utente} from '../../model/utente.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PartitaService} from '../../services/partita.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-feedback-giocatori',
    templateUrl: './feedback-giocatori.page.html',
    styleUrls: ['./feedback-giocatori.page.scss'],
})
export class FeedbackGiocatoriPage implements OnInit {
    private giocatori$: Observable<Utente[]>;
    private ratingFormModel: FormGroup;

    constructor(private activatedRoute: ActivatedRoute,
                private partitaService: PartitaService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.ratingFormModel = this.formBuilder.group({
            voto: ['', Validators.compose([
                Validators.required
            ])]
        });
    }

    ionViewWillEnter() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.giocatori$ = this.partitaService.findGiocatori(parseInt(params.get('id'), 0));
        });
    }

}
