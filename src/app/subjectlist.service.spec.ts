import { TestBed } from '@angular/core/testing';

import { SubjectlistService } from './subjectlist.service';

describe('SubjectlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectlistService = TestBed.get(SubjectlistService);
    expect(service).toBeTruthy();
  });
});
