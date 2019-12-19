import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiePartitePageRoutingModule } from './mie-partite-routing.module';

import { MiePartitePage } from './mie-partite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiePartitePageRoutingModule
  ],
  declarations: [MiePartitePage]
})
export class MiePartitePageModule {}
