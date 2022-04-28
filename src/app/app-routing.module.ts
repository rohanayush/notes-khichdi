import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTextComponent } from './text/add-text/add-text.component';

// const routes: Routes = [

//   {
//     path:"articles",

//     loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
//   },
//   {
//     path:"text",
// component:AddTextComponent
//     // loadChildren: () => import('./text/text.module').then(m => m.TextModule)
//   },
//   {
//     path:"map",

//     loadChildren: () => import('./map/map.module').then(m => m.MapModule)
//   },
//   {
//     path:"picture",

//     loadChildren: () => import('./picture/picture.module').then(m => m.PictureModule)
//   },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }

// ];
const routes: Routes = [

  {
    path:"text",
component:AddTextComponent
    // loadChildren: () => import('./text/text.module').then(m => m.TextModule)
  },
    {
    path:"articles",

    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  },
    {
    path:"maps",

    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path:"picture",

    loadChildren: () => import('./picture/picture.module').then(m => m.PictureModule)
  },
  {
    path:"docs",

    loadChildren: () => import('./document/document.module').then(m => m.DocumentModule)
  },
 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
