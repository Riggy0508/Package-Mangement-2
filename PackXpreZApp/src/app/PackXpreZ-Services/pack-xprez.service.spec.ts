import { TestBed } from '@angular/core/testing';

import { PackXprezService } from './pack-xprez.service';

describe('PackXprezService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackXprezService = TestBed.get(PackXprezService);
    expect(service).toBeTruthy();
  });
});
