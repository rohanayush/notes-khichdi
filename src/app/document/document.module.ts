import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentNotesComponent } from './document-notes/document-notes.component';
import { FormsModule } from '@angular/forms';
import { DocsRoutingModule } from './doc-routing.module';



@NgModule({
  declarations: [
    DocumentNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocsRoutingModule
  ],
  exports:[
    DocumentNotesComponent
  ]
})
export class DocumentModule { }
