const sumOfArrayElement = (arr: Array<number>) => {
  const reducer = (previousValue: number, currentValue: number) =>
    previousValue + currentValue;

  return arr.reduce(reducer);
};

console.log(sumOfArrayElement([54, 87, -68, 10, -105]));
