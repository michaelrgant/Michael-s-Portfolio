import { GET_PRIMARY_DATA } from "../constants/constants";

const primaryData = (state = [], action) => {
  switch (action.type) {
    case GET_PRIMARY_DATA:
      return action.data;
    default:
      return state;
  }
};

export default primaryData;
