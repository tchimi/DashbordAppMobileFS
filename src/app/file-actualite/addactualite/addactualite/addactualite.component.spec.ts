import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactualiteComponent } from './addactualite.component';

describe('AddactualiteComponent', () => {
  let component: AddactualiteComponent;
  let fixture: ComponentFixture<AddactualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddactualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddactualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
