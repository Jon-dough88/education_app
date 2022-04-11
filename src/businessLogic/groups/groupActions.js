import axios from 'axios';
// import { get } from 'mongoose';

import * as MESSAGES from '../messages/messageActions';

const groupUrl = 'http://localhost:4000/api/groups';


export const GROUP_FETCH_IN_PROGRESS = 'groups/fetchInProgress';
export const GROUP_FETCH_SUCCESS = 'groups/fetchSuccess';
export const GROUP_FETCH_FAILURE = 'groups/fetchFailure';
export const GROUP_PAGE_FETCH_ONGOING = 'groups/groupPages/inProgress';
export const GROUP_PAGE_FETCH_DONE = 'groups/groupPages/success';
export const GROUP_PAGE_FETCH_FAILED = 'groups/groupPages/failure';
// export const GROUP_NAME_EXISTS = 'groups/findGroup/exists';
// export const GROUP_NAME_NOT_FOUND = 'groups/findGroup/notFound';
export const GROUP_NAME_CHECK = 'groups/findGroup';


// Fetching all groups taught by a certain teacher

export const fetchGroups = (userId) => async dispatch => {

    console.log(`The user id at groupActions is: ${userId}`)
    // console.log(userId)

    try{
        

            dispatch({type: GROUP_FETCH_IN_PROGRESS});

        // await axios.post(`${groupUrl}/fetchAll`, userId).then(response => {
        await axios.post(`${groupUrl}/fetchAll/:${userId}`).then(response => {
            dispatch({type: GROUP_FETCH_SUCCESS, payload: response.data.groups})

            console.log(response.data.groups)
        }).catch(err => {
            dispatch({type: GROUP_FETCH_FAILURE})
            dispatch({type: MESSAGES.SET_MESSAGE, payload: err})
        })
    }catch(error){
        console.log(error)
    }

    
}


// Linking to group page

export const getGroupPage = (groupId) => async dispatch => {
    console.log(`Group ID: ${groupId}`)

    dispatch({type: GROUP_PAGE_FETCH_ONGOING})

    try {

       await axios.post( `${groupUrl}/groupPages/`, groupId ).then(response => {
            dispatch({type: GROUP_PAGE_FETCH_DONE, payload: response.data})
       }).catch(err => {
            console.log(err);
            dispatch({type: GROUP_PAGE_FETCH_FAILED, payload: err})
       }) 

    } catch (error) {
        
    }
}


// Checking whether a group name already exists

export const findGroupName = (userId, groupName) => async dispatch => {

    try {
    
        await axios.post(`${groupUrl}/findGroup`, {userId, groupName})
        .then(response => dispatch({type: GROUP_NAME_CHECK, payload: response.data}))
        
        .catch(err => {
            console.log(err)
            // dispatch({type: GROUP_NAME_NOT_FOUND, payload: err})
        })


    } catch (error) {
        
        console.log(error)

    }
}

// Creating a new group




// Editing a group's details (grade, level, )



// Searching for a student's name

export const fetchStudentList = (userId) => async dispatch => {
    
}


// Adding a student



// Removing a student



// Adding group history item



// Adding recommended



// Adding saved item



// Group notifications