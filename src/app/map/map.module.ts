import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapNotesComponent } from './map-notes/map-notes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MapNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MapNotesComponent
  ]
})
export class MapModule { }
