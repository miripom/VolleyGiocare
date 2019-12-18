import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioPartitaPage } from './dettaglio-partita.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioPartitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioPartitaPageRoutingModule {}
