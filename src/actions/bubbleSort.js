/*___ types ___*/
import { UPDATE_DATA } from "../types/index.types";
/*___ utilities ___*/
import { checkData } from "../utilities/checkData";

export const bubbleSort = () => (dispatch, getState) => {
  var next_number = 1;
  var number_position = 0;
  // let { values } = getState().dataReducer;
  // console.log(checkData(values));
  var bubbleInterval = setInterval(() => {
    console.log("_");
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
      console.log(getState().dataReducer.values);
    } else {
      clearInterval(bubbleInterval);
    }
  }, 1000);
};
