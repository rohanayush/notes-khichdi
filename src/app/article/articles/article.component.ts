import { Component, OnInit } from '@angular/core';
import { Store, UPDATE } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Articles } from '../model/articles';
import { AddArticle, RemoveArticle ,UpdateArticle} from '../store/article.action';
import { v4 as uuid} from 'uuid';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  note:Articles={
    id1:'',
    title:'',
    description:''
  };
  constructor(private store:Store<Array<Articles>>) { }

  a="Rohan"
  notesItems$:Observable<Array<Articles>>;
  d=[]
  delete(a){
    //console.log("delete",a)
    this.store.dispatch(new RemoveArticle(a));
  }
  onSubmit(){
    if(this.note.description != '' && this.note.title != '' && this.note.title.length <100 ){
      // this.notesService.addNotes(this.note);
      var code=Math.random()
      while(this.d.includes(code)){
           code=Math.random()
      }
      this.d.push(code);
      var a={
        id1:uuid(),
        title:this.note.title,
        description:this.note.description
      }
    

   
    //console.log("articles",a)

    this.store.dispatch(new AddArticle(a))
     
      this.note.description='';
      this.note.title=''
      this.note.id1=""
    }
  }
  edit(o){
    this.note.description=o.description;
  this.note.id1=o.id1;
  this.note.title = o.title;
     
  }
  update(){
  this.store.dispatch(new UpdateArticle(this.note.id1,this.note.description,this.note.title))
  this.note={
    id1:"", title:"", description:""
  }

  }

  notes:any;
  ngOnInit(): void {
    this.notesItems$= this.store.select(store=>store);
    //console.log("data",this.notesItems$)
    this.notesItems$.subscribe(
      (d)=>{
        //console.log("data in article",d)
        this.notes=d["articles"];
      }
    )
    setTimeout(() => {
      
    }, 2000);
  }
}

