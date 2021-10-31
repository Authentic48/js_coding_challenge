export const isLeap = (year: number): boolean => {
  if (year % 2 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    if (year % 400 === 0) return true;
  }

  return false;
};
