import * as actionTypes from './actionTypes';

export function addItem(data) {
    return {
        type: actionTypes.ADD_ITEM,
        data
    }
}

export function removeItem(data) {
    return {
        type: actionTypes.DELETE_ITEM,
        data
    }
}

// export function emptyList() {

// }