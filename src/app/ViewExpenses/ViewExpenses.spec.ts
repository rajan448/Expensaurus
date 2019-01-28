import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpenses } from './ViewExpenses';

describe('Tab2Page', () => {
  let component: ViewExpenses;
  let fixture: ComponentFixture<ViewExpenses>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewExpenses],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
