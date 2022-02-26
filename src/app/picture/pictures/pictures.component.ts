import { Component, OnInit } from '@angular/core';
import { Pictures } from '../model/pictures';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  constructor() { }
  pic: Pictures = {
    id: '',
    title: '',
    picture: '',
    description: ''
  };
  public imagePath;
  imgURL: any;
  public message: string;
  ngOnInit(): void {
  }
  frame: Pictures[] = [];
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  onSubmit() {
    if (this.pic.description != '' && this.pic.title != '' && this.pic.title.length < 100 && this.pic.picture != null) {
      this.pic.picture=this.imgURL;
       this.frame.push(this.pic);
       this.pic={id: '',
       title: '',
       picture: '',
       description: ''}
       this.imgURL=''
      console.log("frame",this.frame)


    }
  }
}