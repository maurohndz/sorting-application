/*___ types ___*/
import { UPDATE_AMOUNT } from "../types/index.types";
/*___ utilities ___*/
import { randomValues } from "../utilities/randomValues";
import { checkData } from "../utilities/checkData";

export const generateValues = (value) => (dispatch, getState) => {
  const { values, amount_of_values } = getState().dataReducer;
  let check = checkData(values);
  if (value && !check) {
    let new_values = randomValues(values, parseInt(value));
    let data = {
      amount: new_values.length,
      arr: new_values,
    };
    dispatch({
      type: UPDATE_AMOUNT,
      payload: data,
    });
  } else {
    let new_values = randomValues(null, amount_of_values);
    let data = {
      amount: new_values.length,
      arr: new_values,
    };
    dispatch({
      type: UPDATE_AMOUNT,
      payload: data,
    });
  }
};
