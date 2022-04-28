import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Notes } from '../model/Notes';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent implements OnInit {

  note:Notes={
    id:'',
    description:''
  };
  constructor(private store:Store<Array<Notes>>) { 

    console.log("this is text");
    

  }

  
  // notesItems$:Observable<Array<Notes>>;
  d=[]
  delete( a){
    //console.log("delete",a)
    this.notes=this.notes.filter(
      note=> note.id != a
    )
    //console.log(this.notes,"after filter")
  }
  onSubmit(){
    if(this.note.description != '' ){
      // this.notesService.addNotes(this.note);
      var code=Math.random()
      while(this.d.includes(code)){
           code=Math.random()
      }
      this.d.push(code);
    var a={
      id:uuid(),
      description:this.note.description
    }
    this.notes.push(a);

     
      this.note.description='';
    }
  }
  notes:Notes[]=[
    {
      id:uuid(),
      description:"It has been amazing developing this application!"

    }
  ];
  ngOnInit(): void {
    // this.notesItems$= this.store.select(store=>store);
   
  }

}
