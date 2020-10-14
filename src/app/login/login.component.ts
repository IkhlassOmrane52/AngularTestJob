import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  

  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(username,password){
    this.userService.userAuthentication(username,password).subscribe((data:any) =>{ 
      localStorage.setItem('access_token', data.access_token);
      this.router.navigate(['/gps-table']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}