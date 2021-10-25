import * as ACTIONS from './usersActions';

const initialState = {
    currentUser: [],
    userName: null,
    token: null,
    errors: []
}


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        
         case ACTIONS.USER_LOGIN:
             return {...state, currentUser: action.payload }
        
         case ACTIONS.FETCH_USER:
             return { state, currentUser: action.payload}    

        default:
            return state
    }
}

export default usersReducer