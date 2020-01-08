import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';


import {PartitePage} from './partite.page';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule, Routes} from '@angular/router';
import {DettaglioPartitaPage} from '../dettaglio-partita/dettaglio-partita.page';

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
        TranslateModule.forChild(),
        RouterModule.forChild(routes),
    ],
    declarations: [PartitePage, DettaglioPartitaPage],
    entryComponents: [DettaglioPartitaPage]
})
export class PartitePageModule {
}
