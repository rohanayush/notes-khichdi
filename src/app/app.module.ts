import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PictureModule } from './picture/picture.module';
import { TextModule } from './text/text.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextModule,
    ArticleModule,
  PictureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
