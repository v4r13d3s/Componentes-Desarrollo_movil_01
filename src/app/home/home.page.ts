import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{

  constructor() {}
  
  ngOnInit(){
    console.log('Hola mundo')
    let numero = 0;

    numero = 5;
    numero = 8;
    numero = numero / 2;
    numero = numero * numero;

    console.log('Este es un hola mundo desde la consola')
    console.log('Dijo Kikegard')
    console.log('La vida puede ser analizada viviendo hacia atrás...')
    console.log('pero solo puede ser vivida viendo hacia delante.')
  }
}
