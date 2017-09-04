import * as actionTypes from '../constans/ListActionTypes';

const initialState = {};

export default function listInfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LIST_FRUIT:
            return action.data;
        case actionTypes.LIST_VEGETABLES:
            return action.data;
        default:
            return state
    }
}