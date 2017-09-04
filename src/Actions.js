import {INCREMENT, DECREMENT} from './ActionTypes';

import AppDispatcher from './AppDispatcher';


export const increment = (counterCaption) => {
    AppDispatcher.dispatch(
        {
            type: INCREMENT,
            counterCaption: counterCaption
        })
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: DECREMENT,
        counterCaption: counterCaption
    });
};