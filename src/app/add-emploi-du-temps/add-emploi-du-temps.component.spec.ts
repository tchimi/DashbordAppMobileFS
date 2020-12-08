import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmploiDuTempsComponent } from './liste-emploi-du-temps.component';

describe('ListeEmploiDuTempsComponent', () => {
  let component: ListeEmploiDuTempsComponent;
  let fixture: ComponentFixture<ListeEmploiDuTempsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEmploiDuTempsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEmploiDuTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
