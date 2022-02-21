import { TestBed } from '@angular/core/testing';

import { PracticeService } from './practice.service';

describe('PracticeService', () => {
  let service: PracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
