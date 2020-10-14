import {Component, Inject,OnInit,Input} from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import * as Chart from 'chart.js'
import { GpstableComponent } from '../gpstable/gpstable.component';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { CircleChartComponent } from '../circle-chart/circle-chart.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'ns-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {
  options: string[] = ['Aujourd hui', 'Hiér',  'Semaine précédente','Semaine Courrante',  'Mois précédent','Mois courant'];
obj:any;
option:string;
somme:number=1.1;
  array=[];
  arraylabel=[];
dataChart:any;
DateChoisie: string;
title:string;
constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<GpstableComponent>, private service:UserService,private toastrService: ToastrService,private dialog: MatDialog){
  this.array=data.arrayid;
  console.log(this.array);
  this.arraylabel=data.arraynomuser;
  console.log(this.arraylabel);
}
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true

  };

  ngOnInit() {
  }
  showDetails(option) {
  let  dataChart =[];
    if(option ==='Aujourd hui'){
      let title='Aujourdhui';
      for( var i = 0; i <this.array.length ; i++){
        this.service.getDistancetoday(this.array[i]).subscribe((data:any)=>{
            data.forEach(element => {
               dataChart.push(element);
        
             });
            })
            if(i===this.array.length-1){
              let exist = false;
              setTimeout(() => {
                dataChart.forEach(element => {
                  if(element!==0){
                    this.chowDetail(dataChart,title);
                    exist = true;
                  }
                  if(!exist){
                    this.toastrService.error('Aucune Distance parcourue Aujourdhui');
                  }
                });
              }, 2000);
            }
          }
        
      
      
           }
     


    else if (option==='Hiér'){

      let title='Hier';
      for( var i = 0; i <this.array.length ; i++){
        this.service.getDistanceyesterday(this.array[i]).subscribe((data:any)=>{
            data.forEach(element => {
               dataChart.push(element);
        
             });
            })
            if(i===this.array.length-1){
              let exist = false;
              setTimeout(() => {
                dataChart.forEach(element => {
                  if(element!==0){
                    this.chowDetail(dataChart,title);
                    exist = true;
                  }
                  if(!exist){
                    this.toastrService.error('Aucune Distance parcourue Hiér');
                  }
                });
              }, 2000);
            }
          }
        
        
      
           

  
    
    
  
  }
  
else  if  (option==='Semaine Courrante'){
  let title='Semaine Courrante';
  for( var i = 0; i <this.array.length ; i++){
    this.service.getDistancecurrentweek(this.array[i]).subscribe((data:any)=>{
        data.forEach(element => {
           dataChart.push(element);
    
         });
        })
        if(i===this.array.length-1){
          let exist = false;
          setTimeout(() => {
            dataChart.forEach(element => {
              if(element!==0){
                this.chowDetail(dataChart,title);
                exist = true;
              }
              if(!exist){
                this.toastrService.error('Aucune Distance parcourue à la semaine courante');
              }
            });
          }, 2000);
        }
      }
    
        
      
           
      
    
        
        }
        else if (option==='Mois courant'){

          let title='Mois Courant';
          for( var i = 0; i <this.array.length ; i++){
            this.service.getDistancecurrentmonth(this.array[i]).subscribe((data:any)=>{
                data.forEach(element => {
                   dataChart.push(element);
            
                 });
                })
                if(i===this.array.length-1){
                  let exist = false;
                  setTimeout(() => {
                    dataChart.forEach(element => {
                      if(element!==0){
                        this.chowDetail(dataChart,title);
                        exist = true;
                      }
                      if(!exist){
                        this.toastrService.error('Aucune Distance parcourue au mois courant');
                      }
                    });
                  }, 2000);
                }
              }
            
        
      
           }
     
  

    else if (option==='Mois précédent'){
      let title='Mois précedent';
      for( var i = 0; i <this.array.length ; i++){
        this.service.getDistancelastmonth(this.array[i]).subscribe((data:any)=>{
            data.forEach(element => {
               dataChart.push(element);
        
             });
            })
            if(i===this.array.length-1){
              let exist = false;
              setTimeout(() => {
                dataChart.forEach(element => {
                  if(element!==0){
                    this.chowDetail(dataChart,title);
                    exist = true;
                  }
                  if(!exist){
                    this.toastrService.error('Aucune Distance parcourue  au mois précédent');
                  }
                });
              }, 2000);
            }
          }
        
      
           }
           else if (option==='Semaine précédente'){
            let title='Semaine précédente';

            for( var i = 0; i <this.array.length ; i++){
              this.service.getDistancelastweek(this.array[i]).subscribe((data:any)=>{
                  data.forEach(element => {
                     dataChart.push(element);
                   });
                  })
                  if(i===this.array.length-1){
                    let exist = false;
                    setTimeout(() => {
                      dataChart.forEach(element => {
                        if(element!==0){
                          this.chowDetail(dataChart,title);
                          exist = true;
                        }
                        if(!exist){
                          this.toastrService.error('Aucune Distance à la semaine précédente');
                        }
                      });
                    }, 2000);
                  }
                }
              
            
                 }
  
          }
   
  
  
  
  chowDetail(dataChart,title){
this.title=title;
console.log(this.title);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.height = "90%";

    dialogConfig.data={data:dataChart,arraylabel:this.arraylabel,title:this.title,option:this.option
    } ;
    this.dialog.open(CircleChartComponent, dialogConfig);
     
   }
   /* this.dialog.open( dialogConfig);*/
     
   
  onClose() {
   
    this.dialogRef.close();
  }
}