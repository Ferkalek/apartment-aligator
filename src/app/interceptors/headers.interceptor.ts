import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const modified = request.clone({ 
        //     setHeaders: { "X-Man": "Wolverine" } 
        // });

        const headerObj = {};

        request.headers.keys().forEach(headerKey => {
            headerObj[headerKey] = request.headers.get(headerKey);
        });

        const headers = new HttpHeaders({
            ...headerObj,
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token',
        });      

        request = request.clone({
            headers,
        });

        //   return next.handle(modified);
        //   return next.handle(newRequest);
        return next.handle(request);
        // return next.handle(request).pipe(
        //     map((event: HttpEvent<any>) => {
        //         console.log('interceptor event', event);
        //         if (event instanceof HttpResponse) {
        //             console.log('interceptor event 1', event);
        //         }
        //         return event;
        //     }));
    }
}
