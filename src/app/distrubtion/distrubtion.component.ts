import { Component, OnInit,Inject } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { GpstableComponent } from '../gpstable/gpstable.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import {DatePipe} from '@angular/common';
export interface Option {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-distrubtion',
  templateUrl: './distrubtion.component.html',
  styleUrls: ['./distrubtion.component.css']
})
export class DistrubtionComponent implements OnInit {
  options: Option[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'}

  ];
  selectedValue = '1';
  len:number;
    option:string;
      value:any;
      nb:any;
      obj:any;
    recievedRow: any;
    longitude_gps:number;
    latitude_gps:number;
    nom_user:string;
  Marques:any;
  title:string;
 
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<GpstableComponent>){
    this.recievedRow=data.data
    this.Marques= this.recievedRow;
    console.log(this.Marques);
    this.Marques.map(item=> 
      console.log(item.latitude_gps));
   /* this.latitude_gps=this.item.latitude_gps;*/
    console.log(this.latitude_gps);
    this.obj=data.data;
    this.latitude_gps=data.latitude_gps;
    this.longitude_gps=data.longitude_gps;
this.len=this.obj.length;
console.log(this.len);
  console.log(this.obj);
   }
  
    zoom: number = 15;
    
  

  ngOnInit() {}
   
   
 
  
  getSelectedValue(value)
  { 
   this.selectedValue = value;
   console.log(this.selectedValue);
}
 

 
  onClose() {
   
    this.dialogRef.close();
  }

}