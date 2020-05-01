import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs/internal/Observable';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class HttpSpinnerRequestInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();

    this.count++;

    return next.handle(req)
      .pipe(tap(), finalize(() => {
        this.count--;

        if ( this.count === 0 ) { this.spinner.hide(); }
      }));
  }
 }
