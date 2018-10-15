import { TestBed } from '@angular/core/testing';

import { KtModelService } from './kt-model.service';

describe('KtModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KtModelService = TestBed.get(KtModelService);
    expect(service).toBeTruthy();
  });
});
