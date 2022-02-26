import { Action } from '@ngrx/store';
import { Notes } from '../model/Notes';


export enum NotesActionTypes{
    ADD_ITEM='[Notes text]  Add Note',
    ADD_ITEM_SUCCESS='[Notes text]  Added Note Success',
    ADD_ITEM_FAIL='[Notes text]  Added Note Fail',



    REMOVE_ITEM='[Notes text] Remove Note',
    }

    export class AddAction implements Action{
        readonly type=NotesActionTypes.ADD_ITEM;

        constructor(public payload:Notes){}
    }
    export class RemoveAction implements Action{
        readonly type=NotesActionTypes.REMOVE_ITEM;

        constructor(public payload:string){}
    }
  
    export type AddNoteAction= AddAction | RemoveAction;