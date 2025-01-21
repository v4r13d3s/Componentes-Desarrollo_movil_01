import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegundoGradoPage } from './segundo-grado.page';

describe('SegundoGradoPage', () => {
  let component: SegundoGradoPage;
  let fixture: ComponentFixture<SegundoGradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoGradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
