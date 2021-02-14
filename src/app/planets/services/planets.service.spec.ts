import {TestBed} from '@angular/core/testing';
import {PlanetsService} from '@app/planets/services/planets.service';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [PlanetsService, SwapiService, HttpClient, HttpHandler]});
    service = TestBed.inject(PlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
