import axios from "axios";
import {useDispatch} from "react-redux";

export const INIT_LOAD = "INIT_LOAD";

export const loadInitStore = () => {
console.log(2);
  return (dispatch) => {
    const json = axios.get("data.json");

//     axios.get('data.json')
//        .then(res => console.log(res.data))
//        .catch(err => console.log(err))

    console.log(2.1);
    console.log(json);

    dispatch({
          type: INIT_LOAD,
          payload: json.data,
        });
  };
};