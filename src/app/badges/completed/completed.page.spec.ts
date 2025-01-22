import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletedPage } from './completed.page';

describe('CompletedPage', () => {
  let component: CompletedPage;
  let fixture: ComponentFixture<CompletedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
