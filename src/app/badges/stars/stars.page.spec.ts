import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarsPage } from './stars.page';

describe('StarsPage', () => {
  let component: StarsPage;
  let fixture: ComponentFixture<StarsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
