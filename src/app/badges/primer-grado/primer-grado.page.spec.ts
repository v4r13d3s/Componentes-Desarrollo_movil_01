import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimerGradoPage } from './primer-grado.page';

describe('PrimerGradoPage', () => {
  let component: PrimerGradoPage;
  let fixture: ComponentFixture<PrimerGradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerGradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
