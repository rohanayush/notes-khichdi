import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes';
  @ViewChild('textShow') text:ElementRef|any ;
  constructor(){
    // this.text.nativeElement.hidden=true;

  }
  showArticle(){
    this.article=true;
    this.picture=false;
  this.docs=false;
  this.txt=false;
  }
  ngOnInit(){
    // this.text.nativeElement.hidden=true;

  }
  txt=false;
  article=false;
  showText(){
    console.log(this.text,"inside function")
    this.txt=true;
    this.picture=false;
  this.docs=false;
  this.article=false;

    // this.text.nativeElement.hidden=false;
  }
  picture=false;
  showPictureNotes(){
    this.article=false;
    this.txt=false;
  this.docs=false;
  this.picture=true;
  }
  docs=false;
  showDocumentNotes(){
    this.article=false;
    this.picture=false;
  this.docs=true;
  this.txt=false;
  }
  }

