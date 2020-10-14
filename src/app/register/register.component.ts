import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import { Contact } from '../contact';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert=false;
  Contact: any[];
  route='http://localhost:8000/user/confirmation?token='
url =`http://localhost:8000/Gps`;
 constructor(public service: UserService, private toastr: ToastrService,private _http:HttpClient) {
 } 

  collection:Contact[];
/* net::ERR_CONNECTION_REFUSE*/
activation_token:string;
 ngOnInit() {
    this.service.formModel.reset();
    this.service.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.collection = data;})
     
  }

  onSubmit() {
    this.service.register().subscribe(
      (data: any) => {
        this.alert = true;

         /*this.service.formModel.reset();*/
         this.activation_token=data.activation_token;
         console.log(this.activation_token);
         })
        }
        verifyEmail(activation_token ) {
          return this._http.post("http://localhost:8000/users/confirm/account",{activation_token}).subscribe((data:any)=>{console.log(data);})}
        
 
closeAlert(){
  this.alert =false;
}
  
}

