import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapNotesComponent } from './map-notes/map-notes.component';
import { FormsModule } from '@angular/forms';
import { MapsRoutingModule } from './maps-routing.module';



@NgModule({
  declarations: [
    MapNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MapsRoutingModule
  ],
  exports:[
    MapNotesComponent
  ]
})
export class MapModule { }
