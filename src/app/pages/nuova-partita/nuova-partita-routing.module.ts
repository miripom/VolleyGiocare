import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovaPartitaPage } from './nuova-partita.page';

const routes: Routes = [
  {
    path: '',
    component: NuovaPartitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovaPartitaPageRoutingModule {}
