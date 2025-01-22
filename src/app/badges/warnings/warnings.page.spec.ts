import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarningsPage } from './warnings.page';

describe('WarningsPage', () => {
  let component: WarningsPage;
  let fixture: ComponentFixture<WarningsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
