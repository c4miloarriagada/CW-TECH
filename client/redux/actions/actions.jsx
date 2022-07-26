import axios from 'axios';
export const POST_TEXT = 'POST_TEXT';

export const postText = (data) =>{
    return async function(dispatch){
        return axios.post(`http://localhost:8000/text`, data)    
        .then(response=>{
            dispatch({type: POST_TEXT, payload: response.data})
        })
        .catch(err => console.log(err))
    }
}