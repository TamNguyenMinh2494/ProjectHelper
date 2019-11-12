import { TestBed } from '@angular/core/testing';

import { CreateAProjectService } from './create-aproject.service';

describe('CreateAProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateAProjectService = TestBed.get(CreateAProjectService);
    expect(service).toBeTruthy();
  });
});
