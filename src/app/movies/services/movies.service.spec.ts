import {TestBed} from '@angular/core/testing';

import {MoviesService} from './movies.service';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MoviesService, SwapiService, HttpClient, HttpHandler] });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
