import axios from 'axios';


// const rootUrl = 'http://localhost:4000';

// const usersUrl = `${rootUrl}/api/users`

// export const USER_SIGNED_UP = `${usersUrl}/signup`;

const usersUrl = 'http://localhost:4000/api/users'
export const USER_SIGNED_UP = 'users/signup'

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



// Login



// Editing account details



// Changing account settings




// Logout



// Upgrading an account