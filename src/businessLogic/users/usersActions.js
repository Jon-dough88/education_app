import axios from 'axios';
import actions from 'redux-form/lib/actions';
import * as MESSAGES from '../messages/messageActions';


// const rootUrl = 'http://localhost:4000';

// const usersUrl = `${rootUrl}/api/users`

// export const USER_SIGNED_UP = `${usersUrl}/signup`;

const usersUrl = 'http://localhost:4000/api/users';

export const SIGNUP_SUCCESS = 'users/signup';
export const SIGNUP_FAILURE = 'users/signupFail'
export const LOGIN_SUCCESS = 'users/login';
export const LOGIN_FAILURE = 'users/loginFailure';
export const LOGOUT = 'users/logout';
export const USER_FETCHED = 'users/fetchUser';
export const AUTH_USER = 'users/authToken'
export const REFRESH_TOKEN = 'users/refreshToken';




// Creating a new user/signing up

export const signup = (signupValues) => async dispatch => {
    console.log(signupValues)
   await axios.post(`${usersUrl}/signup`, signupValues)
   .then(response => {
       console.log(response)
       dispatch({type: SIGNUP_SUCCESS, message: "Sign up successful"})
       dispatch({
           type: MESSAGES.SET_MESSAGE,
           payload: response.data.message
       })

   })
   .catch(err => 
    {console.log(err)
    dispatch({
        type: SIGNUP_FAILURE
    })
    dispatch({
        type: MESSAGES.SET_MESSAGE,
        payload: err.message
    })
    })
    
}


// Fetching existing user data through the refreshToken

export const fetchUser = () => async dispatch => {
    await axios.get(`${usersUrl}/fetchUser`).then(response => {
        console.log(`The user's data is: ${response}`);
        dispatch({type: USER_FETCHED, payload: response.data})
    }).catch(err => {
        console.log(err)
    })
}


// Getting a refresh token

export const getRefreshToken = (userName) => async dispatch => {
    await axios.post(`${usersUrl}/refreshToken`, userName, {withCredentials: true})
    .then(response => {
        dispatch({type: REFRESH_TOKEN, payload: response.data, message: "Refresh token retrieved"})
    })
    .catch(err => {console.log(err)})
}



// Login

export const login = (loginValues) => async dispatch => {
    console.log(loginValues)
    await axios.post(`${usersUrl}/login`, loginValues, {withCredentials: true})
    .then(response => {
        console.log(response.data)
        dispatch({type: LOGIN_SUCCESS, 
            payload: response.data, 
            message: `User ${response.data.userName} successfully logged in`})
    })
    .catch(error => {
        console.log(error)

    })
}


// Editing account details



// Changing account settings




// Logout



// Upgrading an account