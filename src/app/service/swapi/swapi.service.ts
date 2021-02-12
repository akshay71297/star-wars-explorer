import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  readonly BASE_URL = environment.apiUrl;

  constructor() { }



}
