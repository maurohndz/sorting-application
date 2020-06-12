import { UPDATE_DATA } from "../types/index.types";

export const generate = () => (dispatch) => {
  var newData = [];
  for (let i = 0; i < 11; i++) {
    let val = parseInt(Math.random() * (50 - 10) + 10);
    newData.push(val);
  }
  dispatch({
    type: UPDATE_DATA,
    payload: newData,
  });
};
