import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MiePartitePageRoutingModule} from './mie-partite-routing.module';
import {MiePartitePage} from './mie-partite.page';
import {TranslateModule} from '@ngx-translate/core';
import {FeedbackPage} from '../feedback/feedback.page';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MiePartitePageRoutingModule,
        TranslateModule,
        ReactiveFormsModule
    ],
    declarations: [MiePartitePage]
})
export class MiePartitePageModule {
}
