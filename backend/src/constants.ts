export const PRODUCTION = process.env.NODE_ENV === 'production' ? true : false;
export const COOKIE_SESSION_NAME = 'qid';

export const types = [
  1, // general
  2, // place
  3, // organizer
  4, // photographer
]

export const filtersCharacters = [
  'text', // Porównanie wartości
  'range', // Szukanie w podanym zakresie wartości
  'input' // Podanie dwóch wartości (dwa inputy)
]