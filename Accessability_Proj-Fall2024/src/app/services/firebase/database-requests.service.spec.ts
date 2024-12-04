import { TestBed } from '@angular/core/testing';

import { DatabasePullService } from './database-requests.service';

describe('DatabasePullService', () => {
  let service: DatabasePullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabasePullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
