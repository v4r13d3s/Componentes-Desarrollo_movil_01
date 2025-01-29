import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-item-chat', //Este selector se convierte en etiqueta, y lo podemos usar en nuestro html de forma embebida
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
  standalone: false,
})
export class ItemChatComponent  implements OnInit {
  //Para todo, yo necesito variables
  @Input() username: string = '';
  @Input() message: string = '';
  @Input() date: string = '';
  @Input() avatarUrl: string = '';
  
  //Cuando queramos guardar la información vamos a utilizar el output


  constructor() { }

  ngOnInit() {}

}
//Hablamos de una propiedad cuando se encuentran dentro de la etiqueta
//Para poder enlazar uso cochetes
//Tarea, generar 30 chat, y como utilizar la herramienta NgFor, es una directiva de Angular,
//Como podemos hacer uso de eso, como podemos usar un arreglo, y como agregarle el director
//2 proyectos con la plantilla de chats
//1 donde esté el proyecto, pasarlo a otro
//1 que se llame photosgram