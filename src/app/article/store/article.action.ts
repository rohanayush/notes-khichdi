import { Action } from '@ngrx/store';
import { Articles } from '../model/articles';


export enum ArticlesActionTypes{
    ADD_ARTICLE='[Articles text]  Add Note',
    ADD_ARTICLE_SUCCESS='[Articles text]  Added Note Success',
    ADD_ARTICLE_FAIL='[Articles text]  Added Note Fail',



    REMOVE_ARTICLE='[Articles text] Remove Note',
    }

    export class AddArticle implements Action{
        readonly type=ArticlesActionTypes.ADD_ARTICLE;

        constructor(public payload:Articles){}
    }
    export class RemoveArticle implements Action{
        readonly type=ArticlesActionTypes.REMOVE_ARTICLE;

        constructor(public payload:string){}
    }
  
    export type AddNoteAction= AddArticle | RemoveArticle;