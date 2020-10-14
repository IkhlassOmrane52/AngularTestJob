import { Component, OnInit,Inject } from '@angular/core';
import { GpstableComponent } from '../gpstable/gpstable.component';
import {FormControl} from '@angular/forms';
import { ChartType,ChartOptions } from 'chart.js';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartComponent } from '../chart/chart.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'ns-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.css']
})
export class CircleChartComponent implements OnInit {
  title:string;
int:number=0.1;// Pie
public showSpinner:boolean; 
 public pieChartOptions: ChartOptions = {
    responsive: true,};
public pieChartLabels:string[] = [];
public pieChartData:number[]=[];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];
// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
//
public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};


public barChartType = 'bar';
public barChartLegend = true;



  Marques:any[];

  nom_user:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<GpstableComponent>,){ 
    this.Marques= data.data;
    this.title=data.title;
    console.log(data.title);
    this.showSpinner=false;
  this.pieChartLabels=data.arraylabel;
   console.log(this.pieChartLabels)
    this.pieChartData=this.Marques;
    console.log(this.pieChartData);
    this.Marques.map(item=> 
      console.log(item));
      console.log(this.Marques);
    
   }
getDataChart(){
  this.showSpinner = true;
  setTimeout(()=>{
    this.showSpinner=false ;},
  3000);
}
 
ngOnInit() {}

  
  






 sum(pieChartData){
  this.int =0.1;
   this.pieChartData=pieChartData;
 
   for (var i =0 ;i<pieChartData.length; i++){ 
    this.int =this.int + pieChartData[i];
                           }
 console.log(this.int);

 }

  onClose() {
   
    this.dialogRef.close();
  }
  
}
  


  
 