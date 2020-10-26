import {FILM_ALL_GENRES} from "../const";

const DEFAULT_EMPTY_DURATION_VALUE = `0`;
const EMPTY_DURATION_REPEAT = 2;

export const getFilmsByGenre = (films, lookupGenre) => lookupGenre === FILM_ALL_GENRES ?
  films :
  films.filter(
      ({genre}) => genre === lookupGenre
  );

export const getGenresByFilms = (films) => [
  FILM_ALL_GENRES,
  ...new Set(films.map(({genre}) => genre))
];

const getHumanizedDurationValue = (time) => `${Math.floor(time)}`.padEnd(EMPTY_DURATION_REPEAT, DEFAULT_EMPTY_DURATION_VALUE);

export const getHumanizedDuration = (duration) => {
  const seconds = getHumanizedDurationValue(duration % 60);
  const minutes = getHumanizedDurationValue(duration / 60);
  const hours = getHumanizedDurationValue(minutes / 24);

  return `${hours}:${minutes}:${seconds}`;
};
