import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarsPageRoutingModule } from './stars-routing.module';

import { StarsPage } from './stars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarsPageRoutingModule
    
  ],
  declarations: [StarsPage]
})
export class StarsPageModule {}
