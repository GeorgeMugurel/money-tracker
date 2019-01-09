import { TestBed } from '@angular/core/testing';

import { MoneyTrackerService } from './money-tracker.service';

describe('MoneyTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneyTrackerService = TestBed.get(MoneyTrackerService);
    expect(service).toBeTruthy();
  });
});
