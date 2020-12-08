import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDuTempsComponent } from './emploi-du-temps.component';

describe('EmploiDuTempsComponent', () => {
  let component: EmploiDuTempsComponent;
  let fixture: ComponentFixture<EmploiDuTempsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiDuTempsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiDuTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
