import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';
export interface Option {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'ns-duration-position',
  templateUrl: './duration-position.component.html',
  styleUrls: ['./duration-position.component.css']
})
export class DurationPositionComponent implements OnInit {
  options: Option[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}

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
 
  altitude_gps:number;
  
  dateDebut :any;
  DateFin:any;
 
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<MapComponent>) { 

  this.recievedRow=data;
  console.log(this.recievedRow);
 
   this.recievedRow=data.data
  this.Marques= this.recievedRow;
  console.log(this.Marques); 
this.dateDebut=this.dateDebut
    this.DateFin = data.DateFin;
    this.obj=data.data;
    this.latitude_gps=data.latitude_gps;
    this.longitude_gps=data.longitude_gps;
this.len=this.obj.length;
console.log(this.len);
  console.log(this.obj);

}
  zoom: number = 15;
  onClose() {
   
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  getSelectedValue(value)
  { 
   this.selectedValue = value;
   console.log(this.selectedValue);
}
}
