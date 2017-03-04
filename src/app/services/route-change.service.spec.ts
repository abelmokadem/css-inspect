import { TestBed, inject } from '@angular/core/testing';

import { RouteChangeService } from './route-change.service';

describe('RouteChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteChangeService]
    });
  });

  it('should ...', inject([RouteChangeService], (service: RouteChangeService) => {
    expect(service).toBeTruthy();
  }));
});
