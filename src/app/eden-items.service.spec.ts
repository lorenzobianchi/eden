import { TestBed } from '@angular/core/testing';

import { EdenItemsService } from './eden-items.service';

describe('EdenItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdenItemsService = TestBed.get(EdenItemsService);
    expect(service).toBeTruthy();
  });
});
