import * as actionTypes from '../constans/ListActionTypes';


export function fruit(data) {
    return {
        type: actionTypes.LIST_FRUIT,
        data
    }
}

export function vegetables(data) {
    return {
        type:actionTypes.LIST_VEGETABLES,
        data
    }
}