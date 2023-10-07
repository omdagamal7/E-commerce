import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private _loaderService:LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request: ', request);
    if (!request.body && request.method != "DELETE") {
        this._loaderService.show()
    }
    return next.handle(request).pipe(
      finalize(() => setTimeout(() => {
        this._loaderService.hide()
      }, 400))
    )
  }
}
