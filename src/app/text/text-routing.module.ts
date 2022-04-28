import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTextComponent } from './add-text/add-text.component';



const routes: Routes = [
    { path: '', component: AddTextComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TextRoutingModule { }