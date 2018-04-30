import { TestBed, inject } from '@angular/core/testing';

import { ItemFormService } from './item-form.service';

describe('ItemFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemFormService]
    });
  });

  it('should be created', inject([ItemFormService], (service: ItemFormService) => {
    expect(service).toBeTruthy();
  }));
});
