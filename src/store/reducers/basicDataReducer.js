import { GET_BASIC_DATA } from "../constants/constants";

const basicData = (state = [], action) => {
  switch (action.type) {
    case GET_BASIC_DATA:
      return action.data;
    default:
      return state;
  }
};

export default basicData;
