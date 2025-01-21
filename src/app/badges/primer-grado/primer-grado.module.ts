import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimerGradoPageRoutingModule } from './primer-grado-routing.module';

import { PrimerGradoPage } from './primer-grado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimerGradoPageRoutingModule
  ],
  declarations: [PrimerGradoPage]
})
export class PrimerGradoPageModule {}
