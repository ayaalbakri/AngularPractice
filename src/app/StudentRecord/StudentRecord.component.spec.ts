/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentRecordComponent } from './StudentRecord.component';

describe('StudentRecordComponent', () => {
  let component: StudentRecordComponent;
  let fixture: ComponentFixture<StudentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
