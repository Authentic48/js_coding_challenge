const getVowels = (str: string) => {
  const m = str.match(/[aeiou]/gi);
  return m.length;
};

console.log(getVowels('lkjhbysdcgg56raeeiiuooocghhnzxvfzxcbys6fgf09efuw cvt'));
