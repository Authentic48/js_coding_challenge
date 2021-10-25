const filterNegativeNum = (arr: Array<number>) => {
  return arr.filter((x) => {
    return x >= 0;
  });
};

console.log(filterNegativeNum([59, 24, 10, 98, -7]));
