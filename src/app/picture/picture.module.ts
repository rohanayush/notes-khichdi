import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesComponent } from './pictures/pictures.component';
import { FormsModule } from '@angular/forms';
import { PictureRoutingModule } from './picture-routing.module';



@NgModule({
  declarations: [
    PicturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PictureRoutingModule
  ],
  exports:[
    PicturesComponent
  ]
})
export class PictureModule { }
