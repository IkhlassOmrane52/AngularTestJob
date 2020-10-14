import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartComponent } from '../chart/chart.component';
import {FormControl} from '@angular/forms';
import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
@Component({
  selector: 'ns-list-position',
  templateUrl: './list-position.component.html',
  styleUrls: ['./list-position.component.css']
})
export class ListPositionComponent implements OnInit {
    altitude_gps:number;
  longitude_gps:number;
  Marques:any;
  dateDebut :any;
  DateFin:any;
  nom_user:string;
  recievedRow:any;
  latitude_gps:number;
  map: Leaflet.Map;
    constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<ChartComponent>) { 

  this.recievedRow=data;
  console.log(this.recievedRow);
 
   this.recievedRow=data.data
  this.Marques= this.recievedRow;
  console.log(this.Marques); 
this.dateDebut=this.dateDebut
    this.DateFin = data.DateFin;

}
  zoom: number = 15;

ngOnInit() {
  this.Marques =this.recievedRow;
  console.log(this.Marques);
    this.map = Leaflet.map('map',{center:[34, 8],zoom: 7});
  Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'edupala.com © Angular LeafLet',
  }).addTo(this.map);

  Leaflet.control.scale().addTo(this.map);
 for (var i = this.Marques.length - 1; i >= 0; i--) {


  Leaflet.marker([this.Marques[i].latitude_gps,this.Marques[i].longitude_gps]).addTo(this.map).bindPopup('Hii').openPopup();}

  /*antPath([[this.Marques[1].latitude_gps,this.Marques[1].longitude_gps], [this.Marques[3].latitude_gps,this.Marques[3].longitude_gps]],
    { color: '#FF0000', weight: 5, opacity: 0.6 })
    .addTo(this.map);*/
    for (var i = this.Marques.length - 1; i >= 0; i--)
{
    Leaflet.Routing.control({
      lineOptions: {
          styles: [{color: 'red', opacity: 1, weight: 7}]
      },
      router: new Leaflet.Routing.osrmv1({
        language: 'fr',
        profile: 'car', // car, bike, foot
    }),
    
      waypoints: [
        Leaflet.latLng([this.Marques[i].latitude_gps,this.Marques[i].longitude_gps]),
        Leaflet.latLng([this.Marques[i-1].latitude_gps,this.Marques[i-1].longitude_gps])
      ],
     
      routeWhileDragging: true,
      show: true,
      language: 'it',
      geocoder: Leaflet.Control.Geocoder.nominatim({}),
      autoRoute: true
}).addTo(this.map);}
}

  

onClose() {
 
  this.dialogRef.close();
}}