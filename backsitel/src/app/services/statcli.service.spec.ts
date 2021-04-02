import { TestBed } from '@angular/core/testing';

import { StatcliService } from './statcli.service';

describe('StatcliService', () => {
  let service: StatcliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatcliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
