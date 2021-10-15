import axios from 'axios';


const rootUrl = 'http://localhost:6000';

const usersUrl = `${rootUrl}/api/users`

export const USER_SIGNED_UP = `${usersUrl}/signup`;

// Creating a new user/signing up

export const signup = (signupValues) => async dispatch => {
    console.log(signupValues)
    const response = await axios.post(`${usersUrl}/signup`, {signupValues})
    if(response.error){
        console.log(response.error)
    }else{
        dispatch({type: USER_SIGNED_UP})
    }
}

// Fetching an existing user



// Login



// Editing account details



// Changing account settings




// Logout



// Upgrading an account