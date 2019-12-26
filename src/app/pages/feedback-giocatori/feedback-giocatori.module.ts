import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackGiocatoriPageRoutingModule } from './feedback-giocatori-routing.module';

import { FeedbackGiocatoriPage } from './feedback-giocatori.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FeedbackGiocatoriPageRoutingModule,
        TranslateModule,
        ReactiveFormsModule
    ],
  declarations: [FeedbackGiocatoriPage]
})
export class FeedbackGiocatoriPageModule {}
