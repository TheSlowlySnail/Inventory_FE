import { TestBed, inject } from '@angular/core/testing';

import { LendService } from './lend.service';

describe('LendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LendService]
    });
  });

  it('should be created', inject([LendService], (service: LendService) => {
    expect(service).toBeTruthy();
  }));
});
