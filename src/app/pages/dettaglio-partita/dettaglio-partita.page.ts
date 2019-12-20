import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Partita} from '../../model/partita.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PartitaService} from '../../services/partita.service';

@Component({
    selector: 'app-dettaglio-partita',
    templateUrl: './dettaglio-partita.page.html',
    styleUrls: ['./dettaglio-partita.page.scss'],
})
export class DettaglioPartitaPage implements OnInit {
    private partita$: Observable<Partita>;
    private partita = new Partita();

    constructor(private activatedRoute: ActivatedRoute,
                private partitaService: PartitaService) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.partita$ =  this.partitaService.findById(parseInt(params.get('id'), 0))
            this.partita$.subscribe(res => {
                this.partita = res;
                console.log(res);
            });
        });
    }

}
