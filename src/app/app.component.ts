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

  ngOnInit(){
    // this.text.nativeElement.hidden=true;

  }
  txt=false;
  showText(){
    console.log(this.text,"inside function")
    this.txt=true;
    // this.text.nativeElement.hidden=false;
  }
  }

