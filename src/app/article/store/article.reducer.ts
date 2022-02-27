import { Articles } from "../model/articles";
import { AddNoteAction, ArticlesActionTypes } from "./article.action";

const initiateState: Array<Articles> = [
    {
        "id1": 'sfsdf',
        "title":"I am good",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam, maxime rem doloremque eum magni in, eveniet rerum ipsum et voluptatibus odit officiis porro ullam cumque, quod quia quo corrupti."
    },
    {
        "id1": 'sfsdf31',
        "title":"I am human",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam, maxime rem doloremque eum magni in, eveniet rerum ipsum et voluptatibus odit officiis porro ullam cumque, quod quia quo corrupti."
    },
    {
        "id1": 'sfsdf3',
        "title":"I am human and techy",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam, maxime rem doloremque eum magni in, eveniet rerum ipsum et voluptatibus odit officiis porro ullam cumque, quod quia quo corrupti."
    }
]
// export 

export function ArticlesReducer(state: Array<Articles> = initiateState, action: AddNoteAction) {
    switch (action.type) {
        case ArticlesActionTypes.ADD_ARTICLE:
            console.log("in reducer add",...state,action.payload)
            return [...state, action.payload]
        case ArticlesActionTypes.REMOVE_ARTICLE:
            console.log("in reducer remove ",...state,action.payload)

            return state.filter(ARTICLE=>ARTICLE.id1 != action.payload)
        default:
            return state
    }
}