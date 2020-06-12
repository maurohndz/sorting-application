/*___ types ___*/
import { UPDATE_ALGORITHM_SELECT, UPDATE_WORKING } from "../types/index.types";

/*___ UPDATE_ALGORITHM_SELECT ___*/
export const updateAlgorithmSelect = (key) => (dispatch) => {
  dispatch({
    type: UPDATE_ALGORITHM_SELECT,
    payload: key,
  });
};

export const updateWorking = () => (dispatch) => {
  dispatch({
    type: UPDATE_WORKING,
  });
};
