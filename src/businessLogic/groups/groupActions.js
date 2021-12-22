import axios from 'axios';

import * as MESSAGES from '../messages/messageActions';

const groupUrl = 'http://localhost:4000/api/groups';

export const GROUP_FETCH_IN_PROGRESS = 'groups/fetchInProgress';
export const GROUP_FETCH_SUCCESS = 'groups/fetchSuccess';
export const GROUP_FETCH_FAILURE = 'groups/fetchFailure';



// Creating a new group

export const fetchGroups = (userName) => async dispatch => {

    dispatch({type: GROUP_FETCH_IN_PROGRESS});
    await axios.get(`${groupUrl}/fetch`)
    .then(response => {
        dispatch({type: GROUP_FETCH_SUCCESS, payload: response})
    }).catch(err => {
        dispatch({type: GROUP_FETCH_FAILURE})
        dispatch()
    })
}


// Editing a group's details (grade, level, )



// Searching for a student's name



// Adding a student



// Removing a student



// Adding group history item



// Adding recommended



// Adding saved item



// Group notifications