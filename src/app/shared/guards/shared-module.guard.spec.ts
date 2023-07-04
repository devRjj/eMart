import { TestBed } from '@angular/core/testing';

import { SharedModuleGuard } from './shared-module.guard';

describe('SharedModuleGuard', () => {
  let guard: SharedModuleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SharedModuleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
