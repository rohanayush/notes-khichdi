import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Notes } from '../model/Notes';
import { AddAction, RemoveAction } from '../store/notes.action';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.scss']
})
export class AddTextComponent implements OnInit {

  note:Notes={
    id:'',
    description:''
  };
  constructor(private store:Store<Array<Notes>>) { }

  
  notesItems$:Observable<Array<Notes>>;
  d=[]
  delete(a){
    console.log("delete",a)
    this.store.dispatch(new RemoveAction(a));
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
      id:code.toString(),
      description:this.note.description
    }

    this.store.dispatch(new AddAction(a))
     
      this.note.description='';
    }
  }
  notes:any;
  ngOnInit(): void {
    this.notesItems$= this.store.select(store=>store);
    console.log("data",this.notesItems$)
    this.notesItems$.subscribe(
      (d)=>{
        console.log("data",d)
        this.notes=d["notes"];
      }
    )
    setTimeout(() => {
      
    }, 2000);
  }

}
