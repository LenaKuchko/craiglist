import { TestBed, inject } from '@angular/core/testing';

import { AdvertDetailsService } from './advert-details.service';

describe('AdvertDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertDetailsService]
    });
  });

  it('should ...', inject([AdvertDetailsService], (service: AdvertDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
