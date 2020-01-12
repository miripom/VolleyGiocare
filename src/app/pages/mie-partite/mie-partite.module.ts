import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MiePartitePageRoutingModule} from './mie-partite-routing.module';
import {MiePartitePage} from './mie-partite.page';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from '../../components/component.module';
import {DettaglioPartitaComponent} from "../../components/dettaglio-partita.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentModule,
        MiePartitePageRoutingModule,
        TranslateModule,
        ReactiveFormsModule
    ],
    declarations: [MiePartitePage],
    entryComponents: [DettaglioPartitaComponent]

})
export class MiePartitePageModule {
}
