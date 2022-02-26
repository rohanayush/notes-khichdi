import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ArticlesReducer } from './store/article.reducer';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,FormsModule,
    StoreModule.forRoot({
      article:ArticlesReducer
     })
  ],
  exports:[
    ArticleComponent
  ]
})
export class ArticleModule { }
