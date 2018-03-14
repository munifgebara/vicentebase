import { TestBed, async, inject } from '@angular/core/testing';

import { PietraGuardGuard } from './pietra-guard.guard';

describe('PietraGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PietraGuardGuard]
    });
  });

  it('should ...', inject([PietraGuardGuard], (guard: PietraGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
