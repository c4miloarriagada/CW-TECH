import { POST_TEXT } from "../actions/actions";






const initialState = {
    text : []
};

const rootReducer = (state = initialState, action) => {


   switch(action.type){
        case POST_TEXT:
            return{
                ...state,
                text : action.payload
            }  
        default:
            return {...state}
    }

}



export default rootReducer;