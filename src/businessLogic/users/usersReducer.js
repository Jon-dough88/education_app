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
             console.log(action.payload.data)
             return {...state, currentUser: action.payload.data }
        
         case ACTIONS.FETCH_USER:
             return { ...state, currentUser: action.payload}    

        default:
            return state
    }
}

export default usersReducer