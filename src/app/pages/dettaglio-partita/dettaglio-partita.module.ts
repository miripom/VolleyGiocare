import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioPartitaPageRoutingModule } from './dettaglio-partita-routing.module';

import { DettaglioPartitaPage } from './dettaglio-partita.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioPartitaPageRoutingModule,
    TranslateModule
  ],
  declarations: [DettaglioPartitaPage]
})
export class DettaglioPartitaPageModule {}
