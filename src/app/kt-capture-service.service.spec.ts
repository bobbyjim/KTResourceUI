import { TestBed } from '@angular/core/testing';

import { KtCaptureService } from './kt-capture-service.service';

describe('KtCaptureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KtCaptureService = TestBed.get(KtCaptureService);
    expect(service).toBeTruthy();
  });
});
