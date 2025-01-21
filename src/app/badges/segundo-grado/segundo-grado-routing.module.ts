import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundoGradoPage } from './segundo-grado.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoGradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundoGradoPageRoutingModule {}
