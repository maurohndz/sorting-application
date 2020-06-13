export const randomValues = (values, amount) => {
  if (values) {
    let values_len = values.length - 1;
    if (amount > values_len) {
      for (let i = values_len; i <= amount; i++) {
        let val = Math.floor(Math.random() * (501 - 100)) + 100;
        values.push(val);
      }
      return values;
    } else {
      let new_values = values.slice(0, amount + 1);
      return new_values;
    }
  } else {
    let new_values = [];
    for (let i = 0; i <= amount; i++) {
      let val = Math.floor(Math.random() * (501 - 100)) + 100;
      new_values.push(val);
    }
    return new_values;
  }
};
