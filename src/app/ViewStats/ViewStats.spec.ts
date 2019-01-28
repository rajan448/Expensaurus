import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStats } from './ViewStats';

describe('Tab3Page', () => {
  let component: ViewStats;
  let fixture: ComponentFixture<ViewStats>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStats],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
