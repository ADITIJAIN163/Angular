import { TestBed } from '@angular/core/testing';

import { MyserviceServiceService } from './myservice.service.service';

describe('MyserviceServiceService', () => {
  let service: MyserviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
