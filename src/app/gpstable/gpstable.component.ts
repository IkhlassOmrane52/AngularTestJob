import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, throwError, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import {DatePipe} from '@angular/common';
import {formatDate } from '@angular/common';
import{ActivatedRoute} from '@angular/router';

import { DataSource } from '@angular/cdk/collections';
import { Contact } from '../Contact';
import { IGps } from '../Igps';
import { PositionComponent } from '../position/position.component';
import { MapComponent } from '../map/map.component';
import { ChartComponent } from '../chart/chart.component';
import { catchError, map, tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';
import { DetailsComponent } from '../details/details.component';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';
import { DistrubtionComponent } from '../distrubtion/distrubtion.component';
import { GrapheComponent } from '../graphe/graphe.component';
@Component({
  selector: 'app-gpstable',
  templateUrl: './gpstable.component.html',
  styleUrls: ['./gpstable.component.css']
})
export class GpstableComponent implements OnInit {
  @ViewChild(MatPaginator) pager: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;
  Gps:any;
  selectedRow;
  subscribe: Subscription;
  latitude_gps: number;
  longitude_gps: number;
  nom_user: string;
  id_user:number;
  isLoaded: false;
obj:any;
arrayid=[];
arraynomuser=[];
gpss: Array <IGps> =[];

display = false;

  displayedColumns = ['date_install', 'nom_user', 'nom_machine', 'ip_mac', 'latitude_gps', 'longitude_gps', 'altitude_gps', 'accuracy_gps', 'actionsColumn'];
  dataSource: any;
  constructor(private service: UserService, private dialog: MatDialog, public datepipe: DatePipe,private router:ActivatedRoute) {
   /* this.dataSource.paginator = this.pager;*/
  }
  onRowClicked(row) { this.selectedRow = row; }
  isDataSourceEmpty(): boolean {
 { return this.display=false}}
  ngOnInit() {
   
    this.subscribe = this.service.getGps1().subscribe(data => {
      this.dataSource = new MatTableDataSource<IGps>(data);
      this.dataSource.paginator = this.pager;
      this.dataSource.sort = this.sort;
      this.gpss=data;
        this.display = false;

      console.log(this.gpss);
      this.gpss.map(item=> 
        console.log(item[0]))
   console.log(data.id_user);}
   )
   this.display = true;
   setTimeout(this. isDataSourceEmpty, 2000);
 

  
  
  }
  /************find your history */
  findGpsByname(nom_user:HTMLInputElement) {
    this.applyFilter(nom_user.value);
   }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

  }
  createMap()
  {
    this.service.gpsUser(this.nom_user).subscribe((data)=>{
   
      console.log(data);
    })
  }
  /**********show your position ********/
   
  showPosition(latitude_gps, longitude_gps,nom_user): void {
    this.latitude_gps = latitude_gps;
    this.longitude_gps = longitude_gps;
    this.nom_user=nom_user;
    const dialogRef = this.dialog.open(PositionComponent, {
      width: '80%',
      data: {
        latitude_gps: this.latitude_gps,
        longitude_gps: this.longitude_gps,
        nom_user:this.nom_user

      }
    });
    dialogRef.afterClosed().subscribe(_result => {
      console.log('heres the data result ${result}')
    })

  }
/*showMap(nom_user,id_user): void {
  this.nom_user=nom_user;
  this.id_user=id_user;
  this.service.gpsUser(id_user).subscribe((data)=>{console.log(data)
    this.obj=data;
 this.showmap1(data);})}
   
  showmap1(data){
  const dialogRef = this.dialog.open(MapComponent, {
      width: '80%',
      data: {nom_user:this.nom_user,data:this.obj}
       
      
    });
    dialogRef.afterClosed().subscribe(_result => {
      console.log('DetailsComponent result: ${result}');
    });


  }*/
  showMap(nom_user,id_user): void {
    this.nom_user= nom_user;
    this.id_user=id_user;
    const dialogRef = this.dialog.open(MapComponent, {
      width: '60%',
      data: {
        nom_user: this.nom_user,
        id_user:this.id_user,
        data: this.gpss
      } });
      dialogRef.afterClosed().subscribe(_result => {
        console.log('DetailsComponent result: ${result}');
      });
  
    }
    
    
  


  showDistrubition(arrayid,arraynomuser) {
   
    
    this.gpss=this.gpss;
    this.gpss.map(item=> {
      if(arrayid.indexOf(item.id_user) === -1) 
      arrayid.push(item.id_user)});
      this.gpss.map(item=>{
        if(arraynomuser.indexOf(item.nom_user) === -1) 

        arraynomuser.push(item.nom_user)});
        console.log(arraynomuser);
this.arrayid=arrayid;
this.arraynomuser=arraynomuser;
    /*for(var i = this.gpss.length - 1; i >= 0; i--) {console.log(this.gpss[i].id_user)
      this.gpss.forEach(element => {
        arrayid.push(element);
           })}*/
           console.log(arrayid) 
           const dialogRef = this.dialog.open(GrapheComponent, {
            width: '60%',

            data: {
            arrayid:this.arrayid,
            arraynomuser:this.arraynomuser
            } });
            dialogRef.afterClosed().subscribe(_result => {
              console.log('DetailsComponent result: ${result}');
            });
        
          }
          
  showChart(nom_user,id_user): void {
    this.nom_user= nom_user;
    this.id_user=id_user;
    const dialogRef = this.dialog.open(ChartComponent, {
      width: '60%',
      height:'60',
      data: {
        nom_user: this.nom_user,
        id_user:this.id_user,
        data: this.gpss
      } });
      dialogRef.afterClosed().subscribe(_result => {
        console.log('DetailsComponent result: ${result}');
      });
  
    }
    
    
  }

/*export class UserDataSource extends DataSource<any> {
  paginator: MatPaginator;
  dialog: any;
  constructor(private service: UserService) {
    super()
  }
  connect(id): Observable<IGps[]> {
    return this.service.getGpsById(this.router.snapshot.params.id);

  }
  disconnect() { }
  */
 

