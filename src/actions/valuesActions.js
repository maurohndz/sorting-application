/*___ types ___*/
import { UPDATE_AMOUNT } from "../types/index.types";
/*___ utilities ___*/
import { randomValues } from "../utilities/randomValues";

export const generateValues = (value) => (dispatch, getState) => {
  const { values, amount_of_values } = getState().dataReducer;
  if (value) {
  } else {
    let new_values = randomValues(null, amount_of_values);
  }
};
