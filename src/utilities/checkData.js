export const checkData = (arr) => {
  let check = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].heigth > arr[i + 1].heigth) {
      check = false;
    }
  }
  if (check) {
    return true;
  } else {
    return false;
  }
};
