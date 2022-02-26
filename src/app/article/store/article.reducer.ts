import { Articles } from "../model/articles";
import { AddNoteAction, ArticlesActionTypes } from "./article.action";

const initiateState: Array<Articles> = [
    {
        "id1": 'sfsdf',
        "title":"I am good",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam, maxime rem doloremque eum magni in, eveniet rerum ipsum et voluptatibus odit officiis porro ullam cumque, quod quia quo corrupti."
    }
]
// export 

export function ArticlesReducer(state: Array<Articles> = initiateState, action: AddNoteAction) {
    switch (action.type) {
        case ArticlesActionTypes.ADD_ARTICLE:
            return [...state, action.payload]
        case ArticlesActionTypes.REMOVE_ARTICLE:
            return state.filter(ARTICLE=>ARTICLE.id1 != action.payload)
        default:
            return state
    }
}