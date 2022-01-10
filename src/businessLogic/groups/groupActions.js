import axios from 'axios';

import * as MESSAGES from '../messages/messageActions';

const groupUrl = 'http://localhost:4000/api/groups';


export const GROUP_FETCH_IN_PROGRESS = 'groups/fetchInProgress';
export const GROUP_FETCH_SUCCESS = 'groups/fetchSuccess';
export const GROUP_FETCH_FAILURE = 'groups/fetchFailure';



// Fetching all groups taught by a certain teacher

export const fetchGroups = (userId) => async dispatch => {

    // console.log(`The user id at groupActions is: ${userId}`)
    console.log(userId)

    try{
        

            dispatch({type: GROUP_FETCH_IN_PROGRESS});

        await axios.post(`${groupUrl}/fetchAll/:${userId}`).then(response => {
            dispatch({type: GROUP_FETCH_SUCCESS, payload: response.data.groups})
        console.log(response.data)
        }).catch(err => {
            dispatch({type: GROUP_FETCH_FAILURE})
            dispatch({type: MESSAGES.SET_MESSAGE, payload: err})
        })
    }catch(error){
        console.log(error)
    }

    
}


// Creating a new group




// Editing a group's details (grade, level, )



// Searching for a student's name



// Adding a student



// Removing a student



// Adding group history item



// Adding recommended



// Adding saved item



// Group notifications