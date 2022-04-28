import { Component, ElementRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  @ViewChild('textShow') text:ElementRef|any ;
  constructor(private route:Router){
    // this.text.nativeElement.hidden=true;

  }
  showArticle(){
    this.article=true;
    this.picture=false;
  this.docs=false;
    this.maps=false;
    this.txt=false;
  }
  ngOnInit(){
    // this.text.nativeElement.hidden=true;

  }
  maps=false;
  txt=true;
  article=false;
  showText(){
    //console.log(this.text,"inside function")
    this.txt=true;
    this.picture=false;
    this.maps=false;
    this.maps=false;
    this.docs=false;
  this.article=false;

    // this.text.nativeElement.hidden=false;
  }
  routeTo(){
    this.route.navigateByUrl("/articles");
  }
  picture=false;
  showPictureNotes(){
    this.article=false;
    this.maps=false;
    this.txt=false;
  this.docs=false;
  this.picture=true;
  }
  docs=false;
  showDocumentNotes(){
    this.article=false;
    this.picture=false;
  this.docs=true;
    this.maps=false;
    this.txt=false;
  }
  showMapNotes(){
    this.maps=true;
    this.article=false;
    this.picture=false;
  this.docs=false;
  this.txt=false;

  }
  }

