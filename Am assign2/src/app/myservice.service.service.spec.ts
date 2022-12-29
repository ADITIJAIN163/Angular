import { TestBed } from '@angular/core/testing';

import { MyserviceService } from './myservice.service.service';

describe('MyserviceServiceService', () => {
  let service: MyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
