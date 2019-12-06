import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PartitePageRoutingModule} from './partite-routing.module';

import {PartitePage} from './partite.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PartitePageRoutingModule,
        TranslateModule.forChild()
    ],
    declarations: [PartitePage]
})
export class PartitePageModule {
}
