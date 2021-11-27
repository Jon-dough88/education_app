// import axios from "axios";

export const SET_MESSAGE = "messages/set";
export const CLEAR_MESSAGE = "messages/clear";


export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message
})

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
})