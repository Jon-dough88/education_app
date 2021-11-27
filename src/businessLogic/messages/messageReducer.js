import * as ACTIONS from './messageActions';


const initialState = {}

const messageReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_MESSAGE:
            return {...state, message: action.payload}    
        
        case ACTIONS.CLEAR_MESSAGE:
            return {...state, message: ""}
    
        default:
            return state;
    }
}

export default messageReducer
