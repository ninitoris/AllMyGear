import { TestBed } from '@angular/core/testing';

import { MyGearService } from './my-gear.service';

describe('MyGearService', () => {
  let service: MyGearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
