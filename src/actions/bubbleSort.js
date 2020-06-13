/*___ types ___*/
import { UPDATE_DATA, UPDATE_WORKING } from "../types/index.types";
/*___ utilities ___*/
import { checkData } from "../utilities/checkData";

export const bubbleSort = () => (dispatch, getState) => {
  var next_number = 1;
  var number_position = 0;

  var bubbleInterval = setInterval(() => {
    let { values } = getState().dataReducer;
    let aux;
    if (!checkData(values)) {
      if (next_number >= values.length) {
        number_position = 0;
        next_number = 1;
      }

      if (values[number_position] > values[next_number]) {
        aux = values[next_number];
        values[next_number] = values[number_position];
        values[number_position] = aux;
        next_number++;
        number_position++;
      } else {
        next_number++;
        number_position++;
      }

      dispatch({
        type: UPDATE_DATA,
        payload: values,
      });
    } else {
      clearInterval(bubbleInterval);
      dispatch({
        type: UPDATE_WORKING,
      });
    }
  }, 50);
};
