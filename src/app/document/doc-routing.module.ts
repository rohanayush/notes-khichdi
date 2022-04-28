import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentNotesComponent } from './document-notes/document-notes.component';



const routes: Routes = [
    { path: '', component: DocumentNotesComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DocsRoutingModule { }