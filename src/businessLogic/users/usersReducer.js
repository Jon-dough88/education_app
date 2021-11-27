import * as ACTIONS from './usersActions';

const initialState = {
    currentUser: [],
    userName: null,
    userType: null,
    accessToken: null,
    errors: []
}


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        
         case ACTIONS.USER_LOGIN:
         case ACTIONS.REFRESH_TOKEN:
            //  console.log(action.payload)
            //  return {...state, currentUser: action.payload }
            return {...state, accessToken: action.payload.accessToken, userName: action.payload.userName, userType: action.payload.userType}
        
      
            //  case ACTIONS.AUTH_USER:
            //     return { ...state, accessToken: action.payload} 

        default:
            return state
    }
}

export default usersReducer