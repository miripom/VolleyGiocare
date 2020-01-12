import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';


import {PartitePage} from './partite.page';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentModule} from '../../components/component.module';
import {DettaglioPartitaComponent} from "../../components/dettaglio-partita.component";

const routes: Routes = [
    {
        path: '',
        component: PartitePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes),
    ],
    declarations: [PartitePage],
    entryComponents: [DettaglioPartitaComponent]

})
export class PartitePageModule {
}
