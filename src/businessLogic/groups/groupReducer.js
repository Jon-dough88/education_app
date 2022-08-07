import * as ACTIONS from './groupActions';

const initialState = {
    userName: null,
    // userId: null,
    groups: [],
    creationInProgress: false,
    groupCreated: false,
    fetchInProgress: false,
    groupsFetched: false,
    groupPageLoadInProgress: false,
    groupPageFetched: false,
    groupPage: null,
    groupNameExists: false,
    message: [],
    studentList: [],
    studentListFetched: false,
    errors: []
}


const groupReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case ACTIONS.GROUP_CREATION_IN_PROGRESS: 
            return { ...state, creationInProgress: true, groupCreated: false };

        case ACTIONS.GROUP_CREATION_SUCCESS: 
            return {...state, creationInProgress: false, groupCreated: true, groups: action.payload.groupData, message: action.payload.message };

        case ACTIONS.GROUP_CREATION_FAILURE:
            return { ...state, creationInProgress: false, groupCreated: false };
        
         case ACTIONS.GROUP_FETCH_IN_PROGRESS:
             return { ...state, fetchInProgress: true, groupsFetched: false };
         
        case ACTIONS.GROUP_FETCH_FAILURE:
             return { ...state, fetchInProgress: false, groupsFetched: false }

         case ACTIONS.GROUP_FETCH_SUCCESS:
            return {...state, fetchInProgress: false, groupsFetched: true, groups: action.payload, userName: action.payload.userName, userId: action.payload.userId }
        
        case ACTIONS.GROUP_PAGE_FETCH_ONGOING:
            return {...state, groupPageLoadInProgress: true, groupPageFetched: false } 
            
        case ACTIONS.GROUP_PAGE_FETCH_DONE:
            return {...state, groupPageLoadInProgress: false, groupPageFetched: false, groupPage: action.payload }

        case ACTIONS.GROUP_PAGE_FETCH_FAILED:
            return {...state, groupPageLoadInProgress: false, groupPageFetched: false, error: action.payload.error }

        //   case ACTIONS.LOGOUT:
        //       return {...state, userLoggedIn: false, accessToken: null } 

        case ACTIONS.GROUP_NAME_CHECK:
            return { ...state, groupNameExists: action.payload.success, message: action.payload.message }

        // case ACTIONS.GROUP_NAME_NOT_FOUND:
        //     return { ...state, groupNameExists: false }

        case ACTIONS.STUDENT_LIST_FETCHING:
            return { ...state, studentListFetched: false }

        case ACTIONS.STUDENT_LIST_FETCHED:
            return { ...state, studentListFetched: true, studentList: action.payload.students, message: action.payload.message }
        
        case ACTIONS.STUDENT_LIST_FETCHED:
            return { ...state, studentListFetched: false, errors: action.payload.errors}

        default:
            return state
    }
}

export default groupReducer