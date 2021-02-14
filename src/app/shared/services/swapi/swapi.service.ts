import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// injected in shared module
@Injectable()
export class SwapiService {

  readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getPeople(url = null): Observable<any> {
    const newUrl = url ? url : `${this.BASE_URL}/people/`;
    return this.http.get<any>(newUrl);
  }

  getPerson(id): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/people/${id}/`);
  }

  getMovies(url = null): Observable<any> {
    const newUrl = url ? url : `${this.BASE_URL}/films/`;
    return this.http.get<any>(newUrl);
  }

  getMovie(id): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/films/${id}/`);
  }

  getPlanets(url = null): Observable<any> {
    const newUrl = url ? url : `${this.BASE_URL}/planets/`;
    return this.http.get<any>(newUrl);
  }

  getPlanet(id): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/planets/${id}/`);
  }
}
