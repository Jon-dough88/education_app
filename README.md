Welcome to the Education App reference guide!
=============================================

This guide's main purpose is to familiarize you with the app's basic functions
and its API. As the app is still in development, some features and endpoints 
may be added or changed as time goes by, so bear with us.


First off - what, in the world, is an API?
==========================================

(Those who already know the answer may skip ahead to the API documentation section)

An API is an acronym for Application Interface Program, which is essentially
a way for programs to "communicate" with one another, send and receive data,
authorize users, etc. As with most APIs, ours allows for four basic methods of data manipulation:

GET - Retrieving resources 

POST - Inputting data to change existing data (e.g., submitting form data)

PUT - Changing part or all of existing data on the app (e.g., changing a user's account settings).

DELETE - As the name suggests, this involves removing data and will require authoriaztion.


Authentication
===============

Our application uses a JWT authentication system using both an authentication token
stored in memory and a refresh token generated on every page refresh. For details regarding
use of the above, please consult the "Getting a Refresh Token" section in the API Documentation below.



API Documentation
=================

The Education App allows teachers and students to interact in a social-media like environment,
sharing resources such as lessons and exercises and receiving updates in groups. The data managed by our 
API is accordingly divided into three main sections: Users, groups and content management.

Each subsection will detail the method, error handling endpoints and other necessary data for 
interacting with the API.


Users
======

Functions relating to users include logging in and out, signing up, editing account details, 
changing account settings and upgrading an account to Premium.



Signing Up:
-----------

This is done using the endpoint '/users/signup'. 

Method: POST (using signup values)

Errors: Handled using the endpoint /signupFail

Payload: A message for successful user signup (currently in DevTools, to be implemented as a 
          visible message in the future).



An Example of the Code for Signup:
----------------------------------

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




Logging In
----------

This is done using the endpoint '/users/login'.

Method: POST

Errors: Handled through the endpoint '/users/loginFailure'.

Payload: The user's credentials, as stored on a JWT token (saved in memory). 


An Example of the Code Used for Logging In:
------------------------------------------

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



Getting a Refresh Token:
------------------------

In order to retrieve a refresh token, users must have a valid access token
(generated on login).

The endpoint for generating the refresh token is '/users/refreshToken'.

Method: POST

Payload: Username 


An Example of the Code Used for Getting a Refresh Token: 
-------------------------------------------------------

export const getRefreshToken = (userName) => async dispatch => {
    await axios.post(`${usersUrl}/refreshToken`, userName, {withCredentials: true})
    .then(response => {
        dispatch({type: REFRESH_TOKEN, payload: response.data, message: "Refresh token retrieved"})
    })
    .catch(err => {console.log(err)})
}


Editing Account Details
=======================
(TBA)

Changing Account Settings
=========================
(TBA)

Logging Out
===========
(TBA)



Groups
======

Fetching Groups
---------------

Fetching groups is done using the endpoint '/groups/fetchAll/:userId',
with the ID being inserted as a path variable. This is done in order to provide
teachers with access to their groups alone.


Method: POST

Errors: Handled using the '/groups/fetchFailure' endpoint.

Payload: response.data.groups (delivered as an array of objects).


An example of a response: 
------------------------


 _id: 81b398h0yfal6183a,
  groups: [
    {
      _id: 61c9d6dc1a13575b6b8ff0ad,
      groupName: 'Potatoes',
      className: 'C1',
      groupActive: true,
      students: [Array]
    }
  ]
  
  
  Linking to a Group Page
  -----------------------
  
  This is done via clicking on a group tab, allowing users (in this case - teachers and admins)
  to access the group content specific to their group.
  
  The endpoint for linking to group pages is '/groups/groupPages'.
  
  Method: POST
  
  Payload: The groupId object
  
  

Content
=======
(TBA)
