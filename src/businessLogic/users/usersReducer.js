import * as ACTIONS from './usersActions';

const initialState = {
    currentUser: [],
    userName: null,
    userType: null,
    token: null,
    errors: []
}


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        
         case ACTIONS.USER_LOGIN:
             console.log(action.payload)
            //  return {...state, currentUser: action.payload }
            return {...state, token: action.payload.token, userName: action.payload.userName, userType: action.payload.userType}
        
         case ACTIONS.FETCH_USER:
             return { ...state, currentUser: action.payload}    

        default:
            return state
    }
}

export default usersReducer