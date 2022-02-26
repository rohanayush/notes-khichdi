import { isLoweredSymbol } from "@angular/compiler";
import { createReducer, on } from "@ngrx/store";
import { Articles } from "../model/article";
import { AddNoteAction, ArticlesActionTypes } from "./article.action";

const initiateState: Array<Articles> = [
    {
        "id": 'sfsdf',
        "title":"I am good",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam, maxime rem doloremque eum magni in, eveniet rerum ipsum et voluptatibus odit officiis porro ullam cumque, quod quia quo corrupti."
    }
]
// export 

export function ArticlesReducer(state: Array<Articles> = initiateState, action: AddNoteAction) {
    switch (action.type) {
        case ArticlesActionTypes.ADD_ITEM:
            return [...state, action.payload]
        case ArticlesActionTypes.REMOVE_ITEM:
            return state.filter(item=>item.id != action.payload)
        default:
            return state
    }
}