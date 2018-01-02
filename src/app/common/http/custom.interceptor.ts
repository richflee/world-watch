import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('---> INTERCEPTING:', request);

        return next.handle(request).do(evt => {
            if (evt instanceof HttpRequest) {
                console.log('---> requesting:', evt.url);
            }
        });
    }
}
