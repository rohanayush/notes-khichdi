import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTextComponent } from './add-text/add-text.component';
import { FormsModule } from '@angular/forms';
import { TextRoutingModule } from './text-routing.module';


@NgModule({
  declarations: [
    
    AddTextComponent
  ],
  imports: [
    CommonModule,FormsModule,
    
  ],
  exports:[
     AddTextComponent,
     TextRoutingModule
  ]
})
export class TextModule { }
