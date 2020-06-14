/*___ types ___*/
import { UPDATE_DATA, UPDATE_WORKING } from "../types/index.types";
/*___ utilities ___*/
import { checkData } from "../utilities/checkData";

export const bubbleSort = () => (dispatch, getState) => {
  let current_position = 0;
  let next_position = 1;
  let values_length = getState().dataReducer.values.length;
  let max_value = values_length - 1;

  const bubbleInterval = setInterval(() => {
    let { values } = getState().dataReducer;
    let aux;
    if (!checkData(values)) {
      /*___ reset positions and change color of the last bars ___*/
      if (next_position > max_value) {
        /*___ change the color of the last bars ___*/
        for (let i = max_value; i < values_length; i++) {
          values[i] = {
            ...values[i],
            color: "ok",
          };
        }
        max_value -= 1; //exclude the last bars
        /*___ reset positions ___*/
        current_position = 0;
        next_position = 1;
      }

      /*___ apply colors to all bars ___*/
      for (let i = 0; i < max_value; i++) {
        if (i === current_position) {
          values[i] = {
            ...values[i],
            color: "current",
          };
        }
        if (i === next_position) {
          values[i] = {
            ...values[i],
            color: "next",
          };
        }
        if (i !== next_position && i !== current_position) {
          values[i] = {
            ...values[i],
            color: "normal",
          };
        }
      }

      /*___ apply change of position ___*/
      if (values[current_position].heigth > values[next_position].heigth) {
        aux = values[next_position];
        values[next_position] = values[current_position];
        values[current_position] = aux;

        current_position += 1;
        next_position += 1;
      } else {
        current_position += 1;
        next_position += 1;
      }

      /*___ update values ___*/
      dispatch({
        type: UPDATE_DATA,
        payload: values,
      });
    } else {
      clearInterval(bubbleInterval);
      /*___ change color to done ___*/
      for (let i = 0; i < values_length; i++) {
        values[i] = {
          ...values[i],
          color: "ok",
        };
      }
      /*___ update color values ___*/
      dispatch({
        type: UPDATE_DATA,
        payload: values,
      });
      /*___ update status working ___*/
      dispatch({
        type: UPDATE_WORKING,
      });
    }
  }, 40);
};
