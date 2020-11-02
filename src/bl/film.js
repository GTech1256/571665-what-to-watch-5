import {FIRST_FILTER_NAME} from "../const";

const DEFAULT_EMPTY_DURATION_VALUE = `0`;
const EMPTY_DURATION_REPEAT = 2;

export const getFilmsByGenre = (films, lookupGenre) => lookupGenre === FIRST_FILTER_NAME ?
  films :
  films.filter(
      ({genre}) => genre === lookupGenre
  );

export const getGenresByFilms = (films) => [
  FIRST_FILTER_NAME,
  ...new Set(films.map(({genre}) => genre))
];

export const getSimilarFilms = (films, {id, genre}) => films.filter(
    (film) => genre === film.genre && id !== film.id
);

const getHumanizedDurationValue = (time) => `${Math.floor(time)}`.padEnd(EMPTY_DURATION_REPEAT, DEFAULT_EMPTY_DURATION_VALUE);

export const getHumanizedDuration = (duration) => {
  const seconds = getHumanizedDurationValue(duration % 60);
  const minutes = getHumanizedDurationValue(duration / 60);
  const hours = getHumanizedDurationValue(minutes / 24);

  return `${hours}:${minutes}:${seconds}`;
};
