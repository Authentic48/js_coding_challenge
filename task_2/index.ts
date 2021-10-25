// Print a table containing multiplication table

const printMultTable = (n: number) => {
  const arr1 = [...Array(n + 1).keys()].slice(1);
  const arr2 = [...Array(n + 1).keys()].slice(1);

  arr1.forEach((x) => {
    arr2.forEach((y) => {
      console.log(`${x} * ${y} =  ${x * y}`);
    });
  });
};

printMultTable(10);
