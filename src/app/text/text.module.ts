import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTextComponent } from './add-text/add-text.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NotesReducer } from './store/notes.reducer';


@NgModule({
  declarations: [
    
    AddTextComponent
  ],
  imports: [
    CommonModule,FormsModule,
    StoreModule.forRoot({
     notes:NotesReducer
    })
  ],
  exports:[
     AddTextComponent
  ]
})
export class TextModule { }
