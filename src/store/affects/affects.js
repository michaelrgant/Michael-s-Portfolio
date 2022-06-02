import axios from "axios";
import { getBasicData } from "../actions/actions";
import { getPrimaryData } from "../actions/actions";

export const fetchBasic_info = () => {
  return async (dispatch) => {
    const { data: basicData } = await axios.get(`portfolio_shared_data.json`);
    dispatch(getBasicData(basicData));
  };
};
export const fetchPrimary_info = () => {
  return async (dispatch) => {
    const { data: primaryData } = await axios.get(`res_primaryData.json`);
    dispatch(getPrimaryData(primaryData));
  };
};
