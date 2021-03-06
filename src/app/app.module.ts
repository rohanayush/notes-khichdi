import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { ButtonModule } from './button/button.module';
import { DocumentModule } from './document/document.module';
import { MapModule } from './map/map.module';
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
  PictureModule,
  DocumentModule,
  MapModule,
  ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
