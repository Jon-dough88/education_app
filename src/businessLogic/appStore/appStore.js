import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';



import usersReducer from '../users/usersReducer';
import contentReducer from '../content/contentReducer';
import groupReducer from '../groups/groupReducer';
import messageReducer from '../messages/messageReducer';

const appStore = createStore(combineReducers({
    users: usersReducer,
    content: contentReducer,
    groups: groupReducer,
    messages: messageReducer,
    form: formReducer
    
}), applyMiddleware(thunk))


export default appStore