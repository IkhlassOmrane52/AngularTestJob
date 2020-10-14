import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{UserService} from './user.service';
import{Router,CanActivate} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private _userservice:UserService,private _router:Router){}
  canActivate():boolean{
    if(this._userservice.loggedIn()){return true}
    else{
      /*window.alert("Access not allowed!");*/

      this._router.navigate(['/login'])
      return false
    }
  }
    
  
}
