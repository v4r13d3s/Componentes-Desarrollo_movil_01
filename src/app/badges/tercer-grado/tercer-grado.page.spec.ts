import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TercerGradoPage } from './tercer-grado.page';

describe('TercerGradoPage', () => {
  let component: TercerGradoPage;
  let fixture: ComponentFixture<TercerGradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerGradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
