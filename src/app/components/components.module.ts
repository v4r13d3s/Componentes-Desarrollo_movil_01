import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChatComponent } from './item-chat/item-chat.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ItemChatComponent
  ],
  imports: [
    IonicModule,
    CommonModule //Todo lo que les permite que entre. Todos los componentes que tienen el permiso para entrar.
  ],
  exports: [
    ItemChatComponent //Todo lo que les permite que salga. Todos los componentes que tienen el permiso para salir.
  ]
})
export class ComponentsModule { }

//Busco un item y un ionic tron
//Me llevo el ion label y el de la hora
//Le pongo un ion-note dentro del label
