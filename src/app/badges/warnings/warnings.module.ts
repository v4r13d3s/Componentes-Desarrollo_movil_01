import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarningsPageRoutingModule } from './warnings-routing.module';

import { WarningsPage } from './warnings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarningsPageRoutingModule
  ],
  declarations: [WarningsPage]
})
export class WarningsPageModule {}
