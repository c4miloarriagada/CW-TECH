import axios from "axios";
export const POST_TEXT = "POST_TEXT";

export const postText = (data) => {
  return async function (dispatch) {
    return axios
      .get(`https://cw-challenge.herokuapp.com/iecho?text=${data}` || `http://localhost:8000/iecho?text=${data}`) // <-dev
      .then((response) => {
        dispatch({ type: POST_TEXT, payload: response.data });
      })
      .catch((err) => dispatch({ type: POST_TEXT, payload: err }));
  };
};
 