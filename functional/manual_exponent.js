const toThePowerOf = (num, exp) => {
  const items = Array(exp).fill(num);
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return items.reduce(reducer, 1);
};

toThePowerOf(2, 3); //?
toThePowerOf(3, 3); //?
toThePowerOf(4, 2); //?
toThePowerOf(10, 10); //?
10 ** 10; //?
