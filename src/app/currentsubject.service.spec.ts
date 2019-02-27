import { TestBed } from '@angular/core/testing';

import { CurrentsubjectService } from './currentsubject.service';

describe('CurrentsubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentsubjectService = TestBed.get(CurrentsubjectService);
    expect(service).toBeTruthy();
  });
});
