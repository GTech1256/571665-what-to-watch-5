import {FILM_ALL_GENRES} from "../const";

export const getFilmsByGenre = (films, lookupGenre) => lookupGenre === FILM_ALL_GENRES ?
  films :
  films.filter(
      ({genre}) => genre === lookupGenre
  );

export const getGenresByFilms = (films) => [
  FILM_ALL_GENRES,
  ...new Set(films.map(({genre}) => genre))
];
