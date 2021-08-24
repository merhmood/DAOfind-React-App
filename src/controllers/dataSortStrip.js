export const dataSortStrip = (value) => {
  const newValue = [];
  for (let index = 0; index <= 9; index++) {
    newValue.push(value[index]);
  }
  return newValue;
};
