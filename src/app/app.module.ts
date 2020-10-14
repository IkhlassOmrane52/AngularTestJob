import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import{ ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from './user.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatNativeDateModule } from '@angular/material';
import {DatePipe} from '@angular/common';    
import { MatDialogRef} from '@angular/material/dialog';
import { NgxMatDatetimePickerModule,NgxMatNativeDateModule,
  NgxMatTimepickerModule } from 'ngx-mat-datetime-picker';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PositionComponent } from './position/position.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { GpstableComponent } from './gpstable/gpstable.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { DistrubtionComponent } from './distrubtion/distrubtion.component';
import { UserComponent } from './user/user.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ListPositionComponent } from './list-position/list-position.component';
import { AgmDirectionModule } from 'agm-direction';
import { DurationPositionComponent } from './duration-position/duration-position.component';
import { GrapheComponent } from './graphe/graphe.component';
import{  AuthInterceptorService} from './auth-interceptor.service';
import { AuthGuard } from './auth.guard';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CircleChartComponent } from './circle-chart/circle-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainNavComponent,
    PositionComponent,
    ChartComponent,
    MapComponent,
    GpstableComponent,
    DetailsComponent,
    DistrubtionComponent,
    UserComponent,
    ResetpasswordComponent,
    RequestResetComponent,
    ListPositionComponent,
    DurationPositionComponent,
    GrapheComponent,
    CircleChartComponent,
    
   
  ],
  imports: [MatProgressSpinnerModule,
    MatSidenavModule,
    ScrollingModule ,
    MatSelectModule,
    NguiDatetimePickerModule,
    MatDialogModule,
    MatNativeDateModule ,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxMatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDividerModule,
    MatDatepickerModule,
    MatRadioModule,
    MatListModule,
    FlexLayoutModule ,
    AgmDirectionModule,
    NgxMatDatetimePickerModule, NgxMatTimepickerModule,
    MatCheckboxModule,
    ChartsModule,

   
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUCEasL1bCx6e5MzK_8uJG-uYgRXJbYfM',
         libraries: ['places','geometry'] }),
    MatButtonModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      progressBar: true
    })
    
   

  
  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [UserService,DatePipe, AuthGuard,   MatDatepickerModule ,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  entryComponents:[PositionComponent,MapComponent,ChartComponent,DetailsComponent,DistrubtionComponent, ListPositionComponent,DurationPositionComponent,GrapheComponent,CircleChartComponent]
})

export class AppModule { }
