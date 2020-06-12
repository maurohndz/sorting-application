/*___ Types ____*/
import { UPDATE_DATA } from "../types/index.types";

const INITIAL_STATE = {
  values: [],
};

/*___ Case ____*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        values: action.payload,
      };

    default:
      return state;
  }
};
