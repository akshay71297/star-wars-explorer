import {TestBed} from '@angular/core/testing';

import {PeopleService} from './people.service';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [PeopleService, SwapiService, HttpClient, HttpHandler]});
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
