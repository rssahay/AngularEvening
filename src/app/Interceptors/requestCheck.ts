import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";




export class RequestCheck implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({headers: req.headers.set('Content-Type' , 'application/json')
        .set('orgId', '3')
        .set('Authorization', 'lassttt')
    })
        return next.handle(req);
    }
}