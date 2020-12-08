import { TestBed } from '@angular/core/testing';

import { EmploiDuTempsServicesService } from './emploi-du-temps-services.service';

describe('EmploiDuTempsServicesService', () => {
  let service: EmploiDuTempsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploiDuTempsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
