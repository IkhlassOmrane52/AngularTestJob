import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GpstableComponent } from '../gpstable/gpstable.component';
export interface DialogData {
nom_user:string;
  latitude_gps:number;
  longitude_gps:number;}
  @Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  nom_user:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData,public dialogRef: MatDialogRef<GpstableComponent>) { }
 
 
  
  zoom: number = 15;
  ngOnInit() {
 
  }
  onClose() {
   
    this.dialogRef.close("Thanks for using me!");
  }
}
