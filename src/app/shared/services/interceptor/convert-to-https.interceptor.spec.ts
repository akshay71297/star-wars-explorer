import { TestBed } from '@angular/core/testing';

import { ConvertToHttpsInterceptor } from './convert-to-https.interceptor';

describe('ConvertToHttpsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ConvertToHttpsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ConvertToHttpsInterceptor = TestBed.inject(ConvertToHttpsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
