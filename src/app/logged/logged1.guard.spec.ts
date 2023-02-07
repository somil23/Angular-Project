import { TestBed } from '@angular/core/testing';

import { Logged1Guard } from './logged1.guard';

describe('Logged1Guard', () => {
  let guard: Logged1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Logged1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
