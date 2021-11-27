import * as ACTIONS from './usersActions';

const initialState = {
    currentUser: [],
    userName: null,
    userType: null,
    accessToken: null,
    userLoggedIn: false,
    errors: []
}


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        

         case ACTIONS.SIGNUP_SUCCESS:
             return { ...state, userLoggedIn: false };

             case ACTIONS.SIGNUP_FAILURE:
                return { ...state, userLoggedIn: false }

         case ACTIONS.LOGIN_SUCCESS:
         case ACTIONS.REFRESH_TOKEN:
            //  console.log(action.payload)
            //  return {...state, currentUser: action.payload }
            return {...state, accessToken: action.payload.accessToken, userName: action.payload.userName, userType: action.payload.userType, userLoggedIn: true}
        
          case LOGIN_FAILURE:
                

        default:
            return state
    }
}

export default usersReducer