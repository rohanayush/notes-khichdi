import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './articles/article.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ArticlesReducer } from './store/article.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ButtonModule } from '../button/button.module';
import { ArticleRoutingModule } from './article-routing.module';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ButtonModule,
    ArticleRoutingModule,
    StoreModule.forRoot({
      articles:ArticlesReducer
     }),
     StoreDevtoolsModule.instrument({ logOnly: environment.production})
  ],
  exports:[
    ArticleComponent
  ]
})
export class ArticleModule { }
