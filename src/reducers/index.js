import {combineReducers} from 'redux';

import userinfo from './userInfo';
import listInfo from './listInfo';

const rootReducer = combineReducers({
    userinfo,
    listInfo
});

export default rootReducer;