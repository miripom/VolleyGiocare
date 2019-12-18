import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovaPartitaPageRoutingModule } from './nuova-partita-routing.module';

import { NuovaPartitaPage } from './nuova-partita.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NuovaPartitaPageRoutingModule,
        ReactiveFormsModule,
        TranslateModule.forChild()
    ],
  declarations: [NuovaPartitaPage]
})
export class NuovaPartitaPageModule {}
