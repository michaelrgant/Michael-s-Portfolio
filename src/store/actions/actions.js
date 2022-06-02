import { GET_BASIC_DATA } from "../constants/constants";
import { GET_PRIMARY_DATA } from "../constants/constants";

export const getBasicData = (data) => {
  return {
    type: GET_BASIC_DATA,
    data,
  };
};

export const getPrimaryData = (data) => {
  return {
    type: GET_PRIMARY_DATA,
    data,
  };
};


