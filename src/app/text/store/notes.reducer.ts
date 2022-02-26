import { createReducer, on } from "@ngrx/store";
import { Notes } from "../model/Notes";
import { AddNoteAction, NotesActionTypes } from "./notes.action";

const initiateState:Array<Notes> =[
    {
        "id":'sfsdf',
        "description":"Anything!"
    }
]
// export 

export function NotesReducer(state:Array<Notes>=initiateState, action:AddNoteAction){
    switch(action.type){
       case NotesActionTypes.ADD_ITEM:
           return [...state,action.payload]

         default:
             return state
    }
}