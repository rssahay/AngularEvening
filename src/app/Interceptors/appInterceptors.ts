import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class appHttpInterceptors implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Http interceptors called" + req)
        req = req.clone({headers : req.headers.set('Authorization','123qwe')})
        return next.handle(req)
    }
}