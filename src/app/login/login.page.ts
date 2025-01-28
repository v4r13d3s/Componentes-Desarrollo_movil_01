import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  // Con TypeScript 

  email: String = ''; // Inicialización directa, las comillas representan una cadena vacia
  password: String = ''; 
  //No es tan recomendada esta forma para inicializar una variable
  constructor(
    private navController: NavController, //Nav controler me permite 
  ) {
    // Segunda manera para inicializar una variable
    
   }

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

    if(this.email == 'Admin' && this.password == 'Admin'){
      this.navController.navigateForward('/home') //Este también nos permite pasar parametros entre páginas
      console.log('El Correo y la contraseña es correcto');
    } else {
      console.log('El Correo y la contraseña es incorrecto');
    }
    //console.log('Email: ', this.email); 
    //Si usuario=admin y password=admin
    //Entonces console.log('Login Correcto')
    //Sino console.log('Login incorrecto')
  }
}

