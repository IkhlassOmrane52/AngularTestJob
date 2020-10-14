import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { UserService } from '../user.service';
import { DateAdapter } from '@angular/material';
import {DatePipe} from '@angular/common';
import { ListPositionComponent } from '../list-position/list-position.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
export interface DialogData {
 
nom_user:string;
}
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  DateChoisie: string;
  object:any;
  options: string[] = ['Aujourd hui', 'Hiér',  'Semaine précédente','Semaine Courrante',  'Mois précédent','Mois courant'];
tabToday:any[];
  Aujourdhuit=new Date();
  Debut = new FormControl(new Date());
  Fin= new FormControl();
  recievedRow: any;
  TabDetail:any;
 dateDebut:string;
 DateFin:string;
 nom_user:string;
 id_user:number;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<ChartComponent> ,private dialog: MatDialog,private service:UserService,
  private datepipe: DatePipe, private toastrService: ToastrService) 
  {
  /*this.recievedRow=data;
  console.log(this.recievedRow);
  this.recievedRow=data.data
  this.TabDetail= this.recievedRow;
  console.log(this.TabDetail);
  this.TabDetail.map(item=> 
    console.log(item.latitude_gps,item.longitude_gps,item.date_install));*/
    this.nom_user=data.nom_user;
    console.log(data.nom_user);
    this.id_user=data.id_user;
  }
  ngOnInit() {}
    
  

  changePeriodDate(){
    let nom_user=this.data.nom_user;
    console.log(this.data.nom_user);
    let id_user=this.data.id_user;

   let dateDebut =this.datepipe.transform(this.Debut.value, 'yyyy-MM-dd HH:mm:ss') ;
    let DateFin = this.datepipe.transform(this.Fin.value, 'yyyy-MM-dd HH:mm:ss');
    console.log(dateDebut)
    console.log(DateFin)
   this.dateDebut=dateDebut;
   this.DateFin=DateFin;

    this.service.gpsInfoBetweenDuration(dateDebut, DateFin,id_user).subscribe((data:any[])=>{
      console.log(data.length !== 0);
      if(data.length!==0){
        this.tabToday=data;
        this. PeriodeShowDetail(data);
      }else{
        this.toastrService.error('aucune Localisation durant cette periode ');
      }

    })
  }



 showDetails(option) {
    let nom_user=this.data.nom_user;
    console.log(this.data.nom_user);
    let id_user=this.data.id_user;
    console.log(this.data.id_user);
    if(option ==='Aujourd hui'){
      this.service.gpsToday(id_user).subscribe((data:any)=>{console.log(data);
      console.log(data.length !== 0);
      if(data.length!==0){
        this.tabToday=data;
        this. chowDetail(data);
      }else{
        this.toastrService.error('Aucune Route parcourue suite  à la date choisie');
      }

    })
      

    }
    else if (option==='Hiér'){
    
      this.service.gpsYesterday(id_user).subscribe((data:any)=>{console.log(data);
        console.log(data.length !== 0);
      if(data.length!==0){
        this.tabToday=data;
        this. chowDetail(data);
      }else{
        this.toastrService.error('Aucune Route parcourue suite  à la date choisie');
      }

    });

    }
    else if (option==='Semaine précédente'){
     
      this.service.gpsBeforeWeek(id_user).subscribe((data:any)=>{console.log(data);
        console.log(data.length !== 0);
        if(data.length!==0){
          this.tabToday=data;
          this. chowDetail(data);
        }else{
          this.toastrService.error('Aucune Route parcourue suite  à la date choisie');
        }
  
      });
  
      }
    else if (option==='Semaine courrante'){
      
      this.service.gpsCurrentWeek(id_user).subscribe((data:any)=>{console.log(data);
        console.log(data.length !== 0);
        if(data.length!==0){
          this.tabToday=data;
          this. chowDetail(data);
        }else{
          this.toastrService.error('Aucune Route parcourue suite  à la date choisie');
        }
  
      });
  
      }
   
      else if (option==='Mois précédent'){
        this.service.gpsBeforeMonth(id_user).subscribe((data:any)=>{ console.log(data);
          console.log(data.length !== 0);
          if(data.length!==0){
            this.tabToday=data;
            this. chowDetail(data); }else{
              this.toastrService.error('Aucune Route parcourue suite  à la date choisie');
            } });
          }
          
            else {(option==='Mois courant')
        this.service. gpsCurrentMonth(id_user).subscribe((data:any)=>{ console.log(data);
          console.log(data.length !== 0);
          if(data.length!==0){
            this.tabToday=data;
            this. chowDetail(data); }else{
              this.toastrService.error('Aucune Route parcourue suite  à la date choisie');
            }});
          }
    
   
  
  }
/************Detail dialog by option  *******/

chowDetail(data){

  
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";

  dialogConfig.data={data:data,option:this.options,title:this.DateChoisie,nom_user:this.nom_user
  } ;
  this.dialog.open(DetailsComponent, dialogConfig);
   
 }
  PeriodeShowDetail(data){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
  
    dialogConfig.data={data:data,option:this.options,DateFin:this.DateFin,dateDebut:this.dateDebut,nom_user:this.nom_user
  } ;
    this.dialog.open(ListPositionComponent, dialogConfig);
     
  }
 

onClose(): void {
  this.dialogRef.close();
 }


}