import { Action } from '@ngrx/store';
import { Articles } from '../model/article';


export enum ArticlesActionTypes{
    ADD_ITEM='[Articles text]  Add Note',
    ADD_ITEM_SUCCESS='[Articles text]  Added Note Success',
    ADD_ITEM_FAIL='[Articles text]  Added Note Fail',



    REMOVE_ITEM='[Articles text] Remove Note',
    }

    export class AddAction implements Action{
        readonly type=ArticlesActionTypes.ADD_ITEM;

        constructor(public payload:Articles){}
    }
    export class RemoveAction implements Action{
        readonly type=ArticlesActionTypes.REMOVE_ITEM;

        constructor(public payload:string){}
    }
  
    export type AddNoteAction= AddAction | RemoveAction;