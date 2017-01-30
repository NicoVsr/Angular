/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoyenneComponent } from './moyenne.component';

describe('MoyenneComponent', () => {
  let component: MoyenneComponent;
  let fixture: ComponentFixture<MoyenneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoyenneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
