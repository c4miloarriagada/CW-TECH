import axios from "axios";
export const POST_TEXT = "POST_TEXT";

export const postText = (data) => {
  return async function (dispatch) {
    return axios
      .get(`http://localhost:8000/iecho?text=${data}`)
      .then((response) => {
        dispatch({ type: POST_TEXT, payload: response.data });
      })
      .catch((err) => dispatch({ type: POST_TEXT, payload: err }));
  };
};
