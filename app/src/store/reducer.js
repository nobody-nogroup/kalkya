import { FETCH_DATA_SUCCESS } from './action';

const referenceData = {
  items: [
    {
      id: 1,
      name: "Bhel Puri",
      completed: false,
    },
    {
      id: 2,
      name: "Mango Shake",
      completed: false,
    },
  ],
};


const rootReducer = (state = referenceData, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
