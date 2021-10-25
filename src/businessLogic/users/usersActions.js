import axios from 'axios';
import actions from 'redux-form/lib/actions';


// const rootUrl = 'http://localhost:4000';

// const usersUrl = `${rootUrl}/api/users`

// export const USER_SIGNED_UP = `${usersUrl}/signup`;

const usersUrl = 'http://localhost:4000/api/users';

export const USER_SIGNED_UP = 'users/signup';
export const USER_LOGIN = 'users/login';
export const FETCH_USER = 'users/user';

// Creating a new user/signing up

export const signup = (signupValues) => async dispatch => {
    console.log(signupValues)
   await axios.post(`${usersUrl}/signup`, signupValues)
   .then(response => {
       console.log(response)
       dispatch({type: USER_SIGNED_UP, message: "Sign up successful"})
   })
   .catch(err => {console.log(err)})
    
}

// Fetching an existing user

export const fetchUser = () => async dispatch => {
    await axios.get(`${usersUrl}/user`)
    .then( response => {
        dispatch({type: FETCH_USER, payload: response.data})
    })
    .catch(err => {
        console.log(err)

        // Add a dispatch for error messages!
    })
}


// Login

export const login = (loginValues) => async dispatch => {
    console.log(loginValues)
    await axios.post(`${usersUrl}/login`, loginValues)
    .then(response => {
        console.log(response.data)
        dispatch({type: USER_LOGIN, 
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