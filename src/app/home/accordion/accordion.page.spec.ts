import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionPage } from './accordion.page';

describe('AccordionPage', () => {
  let component: AccordionPage;
  let fixture: ComponentFixture<AccordionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
