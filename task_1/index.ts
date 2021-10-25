const printEvenNum = (arr: Array<number>) => {
  const evenNum = arr.filter((num) => {
    return num % 2 === 0;
  });

  return evenNum;
};

console.log(printEvenNum([0, 1, 3, 4, 5, 6]));
