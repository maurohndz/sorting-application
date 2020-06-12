/*___ types ___*/
import { UPDATE_ALGORITHM_SELECT } from "../types/index.types";

/*___ UPDATE_ALGORITHM_SELECT ___*/
export const updateAlgorithmSelect = (key) => (dispatch) => {
  dispatch({
    type: UPDATE_ALGORITHM_SELECT,
    payload: key,
  });
};
