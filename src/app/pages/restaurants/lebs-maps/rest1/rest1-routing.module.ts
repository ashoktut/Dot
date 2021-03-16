import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rest1Page } from './rest1.page';

const routes: Routes = [
  {
    path: '',
    component: Rest1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rest1PageRoutingModule {}
