/*___ Types ____*/
import { UPDATE_DATA, UPDATE_ALGORITHM_SELECT } from "../types/index.types";

const INITIAL_STATE = {
  values: [],
  algorithm: [
    { title: "Bubble Sort", key: "bubble" },
    { title: "Test", key: "test" },
  ],
  algorithm_select: "bubble",
};

/*___ Case ____*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        values: action.payload,
      };

    case UPDATE_ALGORITHM_SELECT:
      return {
        ...state,
        algorithm_select: action.payload,
      };

    default:
      return state;
  }
};
