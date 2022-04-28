import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapNotesComponent } from './map-notes/map-notes.component';



const routes: Routes = [
    { path: '', component: MapNotesComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MapsRoutingModule { }