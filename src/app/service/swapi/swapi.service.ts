import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  readonly BASE_URL = environment.apiUrl;

  constructor() { }



}
