import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDuTempsDeleteComponent } from './emploi-du-temps-delete.component';

describe('EmploiDuTempsDeleteComponent', () => {
  let component: EmploiDuTempsDeleteComponent;
  let fixture: ComponentFixture<EmploiDuTempsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiDuTempsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiDuTempsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
