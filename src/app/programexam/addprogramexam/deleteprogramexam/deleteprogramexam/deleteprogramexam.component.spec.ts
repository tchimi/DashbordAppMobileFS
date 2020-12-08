import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprogramexamComponent } from './deleteprogramexam.component';

describe('DeleteprogramexamComponent', () => {
  let component: DeleteprogramexamComponent;
  let fixture: ComponentFixture<DeleteprogramexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteprogramexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteprogramexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
