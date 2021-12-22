import * as ACTIONS from './groupActions';

const initialState = {

    groups: null,
    fetchInProgress: false,
    groupsFetched: false,
    
}


const groupReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
         case ACTIONS.GROUP_FETCH_IN_PROGRESS:
             return { ...state, fetchInProgress: true, groupsFetched: false };

        case ACTIONS.GROUP_FETCH_FAILURE:
             return { ...state, fetchInProgress: false, groupsFetched: false }

         case ACTIONS.GROUP_FETCH_SUCCESS:
            return {...state, fetchInProgress: false, groupsFetched: false, groups: action.payload }
        
        //   case ACTIONS.LOGOUT:
        //       return {...state, userLoggedIn: false, accessToken: null } 

        default:
            return state
    }
}

export default groupReducer