import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprogramexamComponent } from './addprogramexam.component';

describe('AddprogramexamComponent', () => {
  let component: AddprogramexamComponent;
  let fixture: ComponentFixture<AddprogramexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprogramexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprogramexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
