import { Component, OnInit,Inject } from '@angular/core';
import { GpstableComponent } from '../gpstable/gpstable.component';
import {FormControl} from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartComponent } from '../chart/chart.component';
import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'ns-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css',]
})
export class DetailsComponent implements OnInit {
 distance :any = [];
  Marques:any;
  title:string;
  nom_user:string;
  recievedRow:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<GpstableComponent>){
    this.recievedRow=data.data
    this.Marques= this.recievedRow;
    console.log(this.Marques);
    this.Marques.map(item=> 
      console.log(item.latitude_gps));
   /* this.latitude_gps=this.item.latitude_gps;*/
    console.log(this.latitude_gps);
   }
  latitude_gps:number;
    longitude_gps:number;
    zoom: number = 15;
    map: Leaflet.Map;
  ngOnInit() {
    this.Marques =this.recievedRow;
    console.log(this.Marques);

      this.map = Leaflet.map('map',{center:[34, 8],zoom: 7});
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);
   Leaflet.control.scale().addTo(this.map);
   for (var i = this.Marques.length - 1; i >= 0; i--) {

   Leaflet.marker([this.Marques[i].latitude_gps,this.Marques[i].longitude_gps]).addTo(this.map).bindPopup('Hii').openPopup();
  }
  var _this=this;

    for (var i = this.Marques.length - 1; i >= 0; i--)
    {
    var routeControl= Leaflet.Routing.control({
       
        router: new Leaflet.Routing.osrmv1({
          language: 'fr',
          profile: 'car', // car, bike, foot
      }),
      
        waypoints: [
          Leaflet.latLng([this.Marques[i].latitude_gps,this.Marques[i].longitude_gps]),
          Leaflet.latLng([this.Marques[i-1].latitude_gps,this.Marques[i-1].longitude_gps])
        ],
        lineOptions: {
          styles: [{color: 'red', opacity: 1, weight: 7}]
          
      },
        routeWhileDragging: true,
        show: true,
        language: 'it',
        geocoder: Leaflet.Control.Geocoder.nominatim({}),
        autoRoute: true
  }).addTo(this.map);
  
  routeControl.on('routesfound', function(e) {
   const routes = e.routes;
   const  summary = routes[0].summary;
   var distance = summary.totalDistance / 1000
   var time =  Math.round(summary.totalTime % 3600 / 60)
   _this.returnDistance(distance,time)
    // alert distance and time in km and minutes
    /*alert('Total distance is ' + summary.totalDistance / 1000 + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');*/
 });
 }
  }

 returnDistance(distance,time){
   console.log(distance);
   
 this.distance = {"distance" : distance ,"time" : time }
} 

  
  onClose() {
   
    this.dialogRef.close();
  }

}
