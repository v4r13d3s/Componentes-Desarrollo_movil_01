import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundoGradoPageRoutingModule } from './segundo-grado-routing.module';

import { SegundoGradoPage } from './segundo-grado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundoGradoPageRoutingModule
  ],
  declarations: [SegundoGradoPage]
})
export class SegundoGradoPageModule {}
