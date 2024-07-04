import {useDispatch} from "react-redux";
import myData from './data.json';

export const INIT_LOAD = "INIT_LOAD";

export const loadInitStore = () => {
console.log(2);
  return (dispatch) => {

    console.log(2.1);
    console.log(myData);

    dispatch({
          type: INIT_LOAD,
          payload: myData,
        });
  };
};