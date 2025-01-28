import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  email: String = ''; // Inicialización directa, las comillas representan una cadena vacia
  password: String = ''; 

  constructor(
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){
  
  
      console.log('email: ', this.email);
      console.log('password: ', this.password);
  
  
      console.log(form.value);
      
      //Validar formulario
      console.log('valid', form.valid)
  
      //Si form es inválido
      //Console log ('Todos los campos son requeridos)
      //Return
  
      if(!form.valid) {
        console.log("Todos los campos son requeridos");
        return; //Con el return le digo que ya no continue con la ejecución
      }
  
      if(this.email == 'Amin' && this.password == 'Admin'){
        this.navController.navigateForward('/app/login') //Este también nos permite pasar parametros entre páginas
        console.log('Ingresa a tu cuenta');
      } else {
        console.log('Los campos no están llenados de forma correcta');
      }
      //console.log('Email: ', this.email); 
      //Si usuario=admin y password=admin
      //Entonces console.log('Login Correcto')
      //Sino console.log('Login incorrecto')
    }

}
