import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercerGradoPage } from './tercer-grado.page';

const routes: Routes = [
  {
    path: '',
    component: TercerGradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercerGradoPageRoutingModule {}
