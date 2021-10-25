// length converter

const kmToMiles = (distance: number) => {
  const distInMiles = distance * 1.609;

  return distInMiles;
};

console.log(kmToMiles(10));
