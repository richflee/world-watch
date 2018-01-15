import { TestBed, inject } from '@angular/core/testing';

import { EuCountriesService } from './eu-countries.service';

describe('EuCountriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EuCountriesService]
    });
  });

  it('should be created', inject([EuCountriesService], (service: EuCountriesService) => {
    expect(service).toBeTruthy();
  }));
});
