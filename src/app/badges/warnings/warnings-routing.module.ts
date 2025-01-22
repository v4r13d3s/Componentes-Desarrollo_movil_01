import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarningsPage } from './warnings.page';

const routes: Routes = [
  {
    path: '',
    component: WarningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarningsPageRoutingModule {}
