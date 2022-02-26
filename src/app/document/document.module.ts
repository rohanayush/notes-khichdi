import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentNotesComponent } from './document-notes/document-notes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DocumentNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DocumentNotesComponent
  ]
})
export class DocumentModule { }
