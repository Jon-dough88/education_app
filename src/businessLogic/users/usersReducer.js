import * as ACTIONS from './usersActions';

const initialState = {
    currentUser: [],
    userName: null,
    userId: null,
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
            return {...state,  userLoggedIn: true, accessToken: action.payload.accessToken, userName: action.payload.userName, userId: action.payload._id, userType: action.payload.userType}
        
          case ACTIONS.LOGIN_FAILURE:
                return {...state, userLoggedIn: false, accessToken: null, userName: null, userType: null}
          
          case ACTIONS.LOGOUT:
              return {...state, userLoggedIn: false, accessToken: null } 

        default:
            return state
    }
}

export default usersReducer