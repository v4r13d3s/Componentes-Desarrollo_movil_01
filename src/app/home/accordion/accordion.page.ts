import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  standalone: false,
})
export class AccordionPage implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup!: IonAccordionGroup;

  constructor() { }

  ngOnInit() {
  }

  toggleAccordion() {
    const currentValue = this.accordionGroup.value;
    this.accordionGroup.value = currentValue === 'second' ? undefined : 'second';
  }
}