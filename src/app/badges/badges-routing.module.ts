import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgesPage } from './badges.page';

const routes: Routes = [
  {
    path: '',
    component: BadgesPage
  },  {
    path: 'primer-grado',
    loadChildren: () => import('./primer-grado/primer-grado.module').then( m => m.PrimerGradoPageModule)
  },
  {
    path: 'segundo-grado',
    loadChildren: () => import('./segundo-grado/segundo-grado.module').then( m => m.SegundoGradoPageModule)
  },
  {
    path: 'tercer-grado',
    loadChildren: () => import('./tercer-grado/tercer-grado.module').then( m => m.TercerGradoPageModule)
  },
  {
    path: 'stars',
    loadChildren: () => import('./stars/stars.module').then( m => m.StarsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgesPageRoutingModule {}
