import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackGiocatoriPage } from './feedback-giocatori.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackGiocatoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackGiocatoriPageRoutingModule {}
