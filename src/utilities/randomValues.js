export const randomValues = (values, amount) => {
  let new_values = [];
  if (values) {
  } else {
    for (let i = 0; i <= amount; i++) {
      let val = Math.floor(Math.random() * (501 - 100)) + 100;
      new_values.push(val);
    }
    return new_values;
  }
};
