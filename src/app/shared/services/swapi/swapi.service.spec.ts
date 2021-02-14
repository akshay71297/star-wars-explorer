import {TestBed} from '@angular/core/testing';

import {SwapiService} from './swapi.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('SwapiService', () => {
  let service: SwapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SwapiService, HttpClient, HttpHandler]});
    service = TestBed.inject(SwapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
