import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import usersReducer from '../users/usersReducer';
import contentReducer from '../content/contentReducer';
import groupReducer from '../groups/groupReducer';

const appStore = createStore(combineReducers({
    users: usersReducer,
    content: contentReducer,
}), applyMiddleware(thunk))


export default appStore