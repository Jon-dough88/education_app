import * as ACTIONS from './usersActions';

const initialState = {
    currentUser: null,
    errors: []
}


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        
         case ACTIONS.USER_LOGIN:
             return {...state, currentUser: action.payload}
        

        default:
            return state
    }
}

export default usersReducer