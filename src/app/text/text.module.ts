import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTextComponent } from './add-text/add-text.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    
    AddTextComponent
  ],
  imports: [
    CommonModule,FormsModule,
    
  ],
  exports:[
     AddTextComponent
  ]
})
export class TextModule { }
