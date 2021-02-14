import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '@env/environment';

@Injectable()
export class ConvertToHttpsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (environment.allRequestToHttps) {
      request = request.clone({ url: request.url.replace('http', 'https') });
    }

    return next.handle(request);
  }
}
