import { TestBed } from '@angular/core/testing';

import { ProgramexamServiceService } from './programexam-service.service';

describe('ProgramexamServiceService', () => {
  let service: ProgramexamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramexamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
