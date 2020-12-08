import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { content } from 'googleapis/build/src/apis/content';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let contentType = 'application/json'
    if (this.authService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {

      if(req.body instanceof FormData){
        contentType = 'multipart/form-data'
      }
      const authReq = req.clone({
        headers: new HttpHeaders({
         
          'Authorization':  sessionStorage.getItem('authenticatedUser')
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
