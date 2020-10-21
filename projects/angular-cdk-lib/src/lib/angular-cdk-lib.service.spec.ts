import { TestBed } from '@angular/core/testing';

import { AngularCdkLibService } from './angular-cdk-lib.service';

describe('AngularCdkLibService', () => {
  let service: AngularCdkLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCdkLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
