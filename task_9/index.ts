const isNumDivisibleByTen = (num: number) => {
  if (num % 10 === 0) {
    return true;
  }

  return false;
};

console.log(isNumDivisibleByTen(10));
