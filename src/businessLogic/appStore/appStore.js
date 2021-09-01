import { createStoreHook, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import usersReducer from '../users/usersReducer';

const appStore = combineReducers({
    users: usersReducer,
    
})