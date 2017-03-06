import { TestBed, inject } from '@angular/core/testing';

import { RouteChangeService } from './route-change.service';

describe('RouteChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteChangeService]
    });
  });

  it('should have a basic object', inject([RouteChangeService], (service: RouteChangeService) => {
    expect(service).toBeTruthy();
  }));
  it('should have property name of resourceName', inject([RouteChangeService], (service: RouteChangeService) => {
    var keys = Object.keys(service);
    expect (keys.indexOf('resourceName')).toBeGreaterThan(-1);
  }));
   it('resourceName default value should be empty string', inject([RouteChangeService], (service: RouteChangeService) => {
    expect(service.resourceName.getValue()).toEqual("");
  })); 
});
