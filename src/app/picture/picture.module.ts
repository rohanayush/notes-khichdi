import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesComponent } from './pictures/pictures.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PicturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PicturesComponent
  ]
})
export class PictureModule { }
