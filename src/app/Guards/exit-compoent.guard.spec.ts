import { TestBed } from '@angular/core/testing';

import { ExitCompoentGuard } from './exit-compoent.guard';

describe('ExitCompoentGuard', () => {
  let guard: ExitCompoentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitCompoentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
