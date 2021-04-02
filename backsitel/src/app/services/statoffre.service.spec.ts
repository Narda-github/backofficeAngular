import { TestBed } from '@angular/core/testing';

import { StatoffreService } from './statoffre.service';

describe('StatoffreService', () => {
  let service: StatoffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatoffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
