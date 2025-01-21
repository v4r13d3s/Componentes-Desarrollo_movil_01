import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimerGradoPage } from './primer-grado.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerGradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimerGradoPageRoutingModule {}
