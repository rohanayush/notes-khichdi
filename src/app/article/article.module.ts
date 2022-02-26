import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './articles/article.component';
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
      articles:ArticlesReducer
     })
  ],
  exports:[
    ArticleComponent
  ]
})
export class ArticleModule { }
