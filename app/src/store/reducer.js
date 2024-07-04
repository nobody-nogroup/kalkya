import { INIT_LOAD } from './action';

const initState = undefined;

const rootReducer = (state = initState, action) => {

     console.log("in red");
     console.log(action)

   switch (action.type) {
    case INIT_LOAD:
      console.log("hambe")
      return {
        ...state,
        items : action,
      };
    default:
      return state;
  }
};

export default rootReducer;
