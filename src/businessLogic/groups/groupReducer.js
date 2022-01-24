import * as ACTIONS from './groupActions';

const initialState = {
    userName: null,
    // userId: null,
    groups: null,
    fetchInProgress: false,
    groupsFetched: false,
    pageLoadInProgress: false
    
}


const groupReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
         case ACTIONS.GROUP_FETCH_IN_PROGRESS:
             return { ...state, fetchInProgress: true, groupsFetched: false };
         
        case ACTIONS.GROUP_FETCH_FAILURE:
             return { ...state, fetchInProgress: false, groupsFetched: false }

         case ACTIONS.GROUP_FETCH_SUCCESS:
            return {...state, fetchInProgress: false, groupsFetched: true, groups: action.payload, userName: action.payload.userName, userId: action.payload.userId }
        
        case ACTIONS.GROUP_PAGE_FETCH_ONGOING:
            return {...state, pageLoadInProgress: true}  
        //   case ACTIONS.LOGOUT:
        //       return {...state, userLoggedIn: false, accessToken: null } 

        default:
            return state
    }
}

export default groupReducer