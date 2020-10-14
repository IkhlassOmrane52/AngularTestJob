import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpResponse } from "@angular/common/http";

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Contact } from './contact';
import { retry, catchError,map ,tap} from 'rxjs/operators';
import {  IGps } from './Igps';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:8000/Gps';
  baseUrl ="http://localhost:8000/users/confirm/account";
  constructor(private fb: FormBuilder, private _http: HttpClient) { }
 /*readonly BaseURI = 'http://localhost:8000';*/ 

 readonly rootUrl = 'http://localhost:8000';
readonly URLP=' http://localhost:8000/api/gpsbetwenndate'
  formModel = this.fb.group({
    username: ['', Validators.required],
   email: ['', Validators.email],
    nom: [''],
    prenom: [''],
    adresse: [''],
    password:[''],
    password_confirmation:[''],

    Passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      password_confirmation: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('password_confirmation');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      username: this.formModel.value.username,
      email: this.formModel.value.email,
     
      password: this.formModel.value.Passwords.password,
      password_confirmation: this.formModel.value.Passwords.password_confirmation,
      nom: this.formModel.value.nom,
      prenom: this.formModel.value.prenom,
      adresse: this.formModel.value.adresse,


    };
    return this._http.post(" http://localhost:8000/users", body);
  }
  /*getGps(){
    return this._http.get(" http://localhost:8000/Gps");
 }*/

 sendGetRequest(): Observable<any>{
  return this._http.get(this.apiURL,{responseType: 'json'});
}

 getGpsById() : Observable<IGps[]> {
  return this._http.get<IGps[]>("http://localhost:8000/Gps");



}



getGps1(): Observable<any> {
  return this._http.get("http://localhost:8000/api/gpshistoriAll");
  
}

userAuthentication(username, password) {

  return this._http.post("http://localhost:8000/oauth/v2/token", {"username":username,
                                                                  "grant_type":"password",
                                                                  "password":password,
                                                                  "client_id": "2_ntli0evbbysoccksw0ookggsw8koc4go0k4gg0ogsssk8k484",
                                                                  "client_secret": "69h9jadn9bks44go0cco8w0swkso4skoo0o8kkko4o44ck4oks"
                                                                });
}
  /*********requestReset */
  requestReset(body): Observable<any> {
    return this._http.post("http://localhost:8000/users/reset-password/send-email", body);
  }
  /*****All Gps By User_Name */
  gpsUser(id_user): Observable<any> {
    return this._http.get(` http://localhost:8000/gpsByUser/${id_user}`);

  
  }
 /**********optionToday (Aujourdhui)*/
  gpsToday(id_user): Observable<any> {
    return this._http.get(` http://localhost:8000/api/gpsAujourdhui/${id_user}`);

  
  }

  /**********optionYesterday(hier) */
  gpsYesterday(id_user): Observable<any> {
    return this._http.get(`http://localhost:8000/api/gpsHier/${id_user}`);

  }
  /**********optionBeforeWeek(Semaine) */

gpsBeforeWeek(id_user): Observable<any> {
    return this._http.get(` http://localhost:8000/api/gpsSemaine/${id_user}`);

  }
  /**********optionBeforeMonth(Month) */
  gpsBeforeMonth(id_user): Observable<any> {
    return this._http.get(` http://localhost:8000/api/gpsMois/${id_user}`);

  }
  /**********optionCurrentWeek(Semaine) */
  gpsCurrentWeek(id_user): Observable<any> {
    return this._http.get(`http://localhost:8000/api/gpsSemaineCourrant/${id_user}`);

  }
   /**********optionCurrentWeek(Semaine) */
   gpsCurrentMonth(id_user): Observable<any> {
    return this._http.get(`http://localhost:8000/api/gpsMoisCourrant/${id_user}`);

  }
    /**********optionBetween2Date(Durée) **/
    gpsInfoBetweenDuration(beginDateTime,endDateTime,id_user){
      return this._http.post( `${this.URLP}/${id_user}`,{"beginDateTime":beginDateTime,"endDateTime":endDateTime});
    }

    newPassword(body): Observable<any> {
      return this._http.post("http://localhost:8000/users/reset-password", body);}
      ValidPasswordToken(body): Observable<any> {
        return this._http.post("http:localhost:8000/users/confirm/account", body);
      }
      loggedIn(){
        return localStorage.getItem('access_token')

      }
      getToken(){
        return localStorage.getItem('access_token')
      }
       getDistancetoday(id_user): Observable<any> {
        return this._http.get(` http://localhost:8000/api/gps/distance/${id_user}`);
    
      
      }
       getDistanceyesterday(id_user): Observable<any> {
        return this._http.get(` http://localhost:8000/api/gpsyesterday/distance/${id_user}`);
    
      
      }
       getDistancecurrentweek(id_user): Observable<any> {
        return this._http.get(` http://localhost:8000/api/gpssemainecourant/distance/${id_user}`);
    
      
      }
      getDistancecurrentmonth(id_user): Observable<any> {
        return this._http.get(` http://localhost:8000/api/gpsmois/distance/${id_user}`);
    
      
      }
      getDistancelastmonth(id_user): Observable<any> {
        return this._http.get(` http://localhost:8000/api/gpsmoisprecedent/distance/${id_user}`);
    
      
      }
      getDistancelastweek(id_user): Observable<any> {
        return this._http.get(` http://localhost:8000/api/gpslastweek/distance/${id_user}`);
    
      
      }
    
}