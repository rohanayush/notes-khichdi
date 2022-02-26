import { Component, OnInit } from '@angular/core';
import { Documents } from '../model/document';

@Component({
  selector: 'app-document-notes',
  templateUrl: './document-notes.component.html',
  styleUrls: ['./document-notes.component.scss']
})
export class DocumentNotesComponent implements OnInit {

  constructor() { }
  docs:Documents={
    id:'',
    title:'',
    type:'',
    document:''
  }
  type:any;
  document:any;
  ngOnInit(): void {
  }
  public imagePath;
  imgURL: any='';
  public message: string;
  preview(files){
    console.log(files)
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    this.type=mimeType;
    this.document=files[0].name;
    console.log(mimeType);
    // if (mimeType.match(/image\/*/) == null) {
    //   this.message = "Only images are supported.";
    //   return;
    // }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      console.log("url",this.imgURL)
      this.message=""
    }
  }
  doc_note:Documents[]=[]
  onSubmit(){
   if(this.document.length >0 && this.docs.title !=''){
     this.docs.title=this.docs.title+"|"+ this.document;
     this.docs.type=this.type;
     this.docs.document=this.imgURL;
     this.doc_note.push(this.docs);
     this.docs={
      id:'',
      title:'',
      type:'',
      document:''
    }

   }
  }

}
