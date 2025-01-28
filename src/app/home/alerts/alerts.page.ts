import { Component, OnInit } from '@angular/core';
import type { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: false,
})
export class AlertsPage implements OnInit {
  alertaUno = ['OK!'];

  isAlertOpen = false;
  alertaDos = ['Ok!'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }


  public alertaBotones = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }



  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Alias (max 8 caracteres)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Un poco sobre ti',
    },
  ];




  public alertaRadio = ['OK'];
  public alertaEntrada = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];




  public alertaPersonalizada = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
