enum ResistanceValue {
  black = 0,

  brown = 1,

  red = 2,

  orange = 3,

  yellow = 4,

  green = 5,

  blue = 6,

  violet = 7,

  grey = 8,

  white = 9,
}

type Color = keyof typeof ResistanceValue;

type PairOf<T> = [T, T];

export const decodedValue = (colors: PairOf<Color>): number => {
  const [firstColor, secondColor] = colors;

  return 10 * ResistanceValue[firstColor] + ResistanceValue[secondColor];
};
