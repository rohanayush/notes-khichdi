import { Component, Injectable, OnInit,ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, Marker, NavigationControl, LngLatLike, LngLat, LngLatBounds } from 'maplibre-gl';
import { Maps } from '../model/map';
import {v4 as uuid} from 'uuid';
@Component({
  selector: 'app-map-notes',
  templateUrl: './map-notes.component.html',
  styleUrls: ['./map-notes.component.scss']
})

@Injectable()
export class MapNotesComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  constructor() { }
  ngOnDestroy() {
    this.map?.remove();
  }
  ngOnInit(): void {
  }
  aMarker:any;
  ngAfterViewInit() {
    const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh`,
      // style: './../../../assets/map.style.json',
      // style:`https://api.maptiler.com/data/65427794-100e-425d-b631-2ff9ca13687b/features.json?key=CH1cYDfxBV9ZBu1lHGqh`,
      center: initialState,

      zoom: 3,
      hash: true,
    });
    // this.aMarker = new Marker(document.getElementById('marker')).setOffset([0, 0]).setDraggable(true).setLngLat([-108.54491326556354,70.3919058347233]).addTo(this.map);
    var r=this.map.on('click',(e)=>{
      localStorage.setItem('coords',e.lngLat.wrap().toString())
      console.log(e.lngLat.toString())
      return e.lngLat.toString();
    })
    console.log("r",r)


    // setTimeout(() => {
    //   if(localStorage.getItem('coords').length>0){
    //     var coords = localStorage.getItem('coords');
    //     coords=coords.substring(7,coords.length-1)
    //     var kk=coords.split(',')
    //     var a=[]
    //     a.push(Number(kk[0]))
    //     a.push(Number(kk[1]))
    //     console.log("a",a)
    //     var aa= a as LngLatLike;
    //     this.aMarker = new Marker(document.getElementById('marker')).setOffset([0, 0]).setDraggable(true).setLngLat(aa).addTo(this.map);
  
    //   }
    // }, 2000);
    this.map.addControl(new NavigationControl(), 'top-right')
    var amap=this.map;
    function value(){
      var aa=amap.on("moveend", function(e){
        return e;
      })
      return {"target":aa};
    }
  //  this.map.on('click',function(e){
  //    localStorage.setItem('')
  //  })
   
    // this.make_marker(res151);
  
  
      var ee= value();
      //console.log("ww",ee)
      this.updateMap(ee);

   

  }
  setMap(o){
    this.map.setCenter(o.center);
    this.map.setZoom(o.zoom);
    // this.map.setCenter(o.center);
  }
  // mapp:Maps={
  //   id:"",
  //   title:"",
  //   center: [0,0],
  //   zoom: 3,
  //   bbox: this.map.getBounds(),
  //   geoJSON: ''
  // }
  inp:Maps={
    id:'',
    bbox:'',
    zoom:'',
    center:'',
    title:'',
  }
  map1:Maps={
    id:'',
      bbox:'',
      zoom:'',
      center:'',
      title:'',
  }
  updateMap(event: { target: Map }) {
    const { target } =  event;
    console.log("bounds",target.getBounds(),"center",target.getCenter(),"zoom",target.getZoom());
   
    
    this.inp.id=uuid()
    
      this.inp.bbox=target.getBounds()
      this.inp.zoom=target.getZoom()
      this.inp.center=target.getCenter();
      
    
  }

  map_notes=[]
  onSubmit(){
      if(this.map1.title !='' && this.inp.center.toString().length>0 ){
          // var a=this.map1;
          // this.inp.title=this.map1.title;
          // this.map_notes.push(this.inp)
            if(localStorage.getItem('coords').length>0){
        var coords = localStorage.getItem('coords');
        coords=coords.substring(7,coords.length-1)
        var kk=coords.split(',')
        var a=[]
        a.push(Number(kk[0]))
        a.push(Number(kk[1]))
        console.log("a",a)
        var aa= a as LngLatLike;
        var a1={
          id:uuid(),
          title:this.map1.title,
          center:aa,
          zoom:this.map1.zoom
        }
        this.map_notes.push(a1);
        setTimeout(() => {
          console.log("map notes",this.map_notes)
          
        }, 200);
        // this.aMarker = new Marker(document.getElementById('marker')).setOffset([0, 0]).setDraggable(true).setLngLat(aa).addTo(this.map);
      }
  }
}
}
