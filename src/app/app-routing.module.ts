
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { GpstableComponent } from './gpstable/gpstable.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthGuard } from './auth.guard';


const routes: Routes =[{ path: '',
redirectTo: '/main-nav',
pathMatch: 'full'}
,{ path: 'login', component: LoginComponent },

 { path: 'register', component: RegisterComponent },  { path: 'main-nav', component:  MainNavComponent }
, { path: 'gps-table', component:  GpstableComponent ,canActivate:[AuthGuard]}, { path: 'request', component:  RequestResetComponent },{ path: 'response', component:  ResetpasswordComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
