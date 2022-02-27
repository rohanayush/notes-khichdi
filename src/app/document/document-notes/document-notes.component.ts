import { Component, OnInit } from '@angular/core';
import { Documents } from '../model/document';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-document-notes',
  templateUrl: './document-notes.component.html',
  styleUrls: ['./document-notes.component.css']
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
  download:any;
  public imagePath;
  imgURL: any='';
  public message: string;
  download_file(){
    window.open(this.download);
  }
  delete(id){
    this.doc_note=this.doc_note.filter(docs=>docs.id != id)
  }
  preview(files){
    ////console.log(files)
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    this.type=mimeType.toString();
    this.document=files[0].name;
    ////console.log("mimeType",this.type);
    // if (mimeType.match(/image\/*/) == null) {
    //   this.message = "Only images are supported.";
    //   return;
    // }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    const blob= new Blob(files[0], {type:mimeType});
    this.download = window.URL.createObjectURL(blob);
    window.open(this.download)
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      ////console.log("url",this.imgURL)
      this.message=""
    }
  }
  doc_note:Documents[]=[]
  onSubmit(){
   if(this.document.length >0 && this.docs.title !=''){
     this.docs.id=uuid();
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
