import { createStore as reduxCreateStore } from "redux"
import {ADD_ITEM, DELETE_ITEM} from './actionTypes'

const initialState = {
  list: []
}

function reducer(state = initialState, action) {

    switch(action.type) {
        case ADD_ITEM:
            console.log("Add Item triggered")
            return {
                ...state,
                list: [...state.list, action.data]
            }
        case DELETE_ITEM:
            console.log("Delete Item triggered");
            return {
                ...state,
                list: state.list.filter(item => item.contentful_id !== action.data.contentful_id)
            }
        default:
            return state
    }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore