import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false,
})
export class ChatPage implements OnInit {
  //El any no es recomendable usarlo, pero como no sabemos que tipos de datos son, vamos a poner any
  chats: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Y en mi chat.page.html debo de declarar mi chat de los chats

  constructor() { }

  ngOnInit() {
  }

}
