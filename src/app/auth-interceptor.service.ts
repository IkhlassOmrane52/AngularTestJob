import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService} from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router,private injector:Injector) {

  }
intercept(req,next){
  let userService=this.injector.get(UserService)
  let  tokenizedReq=req.clone({
    setHeaders:{
      Authorization: 'Bearer ' +userService.getToken()
    }
  })
  return  next.handle(tokenizedReq)
}
}