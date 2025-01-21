import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercerGradoPageRoutingModule } from './tercer-grado-routing.module';

import { TercerGradoPage } from './tercer-grado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercerGradoPageRoutingModule
  ],
  declarations: [TercerGradoPage]
})
export class TercerGradoPageModule {}
