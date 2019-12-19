import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiePartitePage } from './mie-partite.page';

const routes: Routes = [
  {
    path: '',
    component: MiePartitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiePartitePageRoutingModule {}
