import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprogramexamComponent } from './listeprogramexam.component';

describe('ListeprogramexamComponent', () => {
  let component: ListeprogramexamComponent;
  let fixture: ComponentFixture<ListeprogramexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeprogramexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeprogramexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
