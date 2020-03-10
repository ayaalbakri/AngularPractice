/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimplebindingComponent } from './simplebinding.component';

describe('SimplebindingComponent', () => {
  let component: SimplebindingComponent;
  let fixture: ComponentFixture<SimplebindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplebindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
