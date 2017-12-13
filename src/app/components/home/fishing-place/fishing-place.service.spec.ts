import { TestBed, inject } from '@angular/core/testing';

import { FishingPlaceService } from './fishing-place.service';

describe('FishingPlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FishingPlaceService]
    });
  });

  it('should be created', inject([FishingPlaceService], (service: FishingPlaceService) => {
    expect(service).toBeTruthy();
  }));
});
