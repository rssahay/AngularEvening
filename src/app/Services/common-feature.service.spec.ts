import { TestBed } from '@angular/core/testing';

import { CommonFeatureService } from './common-feature.service';

describe('CommonFeatureService', () => {
  let service: CommonFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
