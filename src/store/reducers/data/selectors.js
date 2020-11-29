import {EMPTY_STATE_VALUE, NameSpace} from "../../../const";

const NAME_SPACE = NameSpace.DATA;

export const getPromoFilm = (state) => state[NAME_SPACE].promoFilm;

export const getFilms = (state) => state[NAME_SPACE].films;

export const getFilm = (state, filmId) => {
  const {film} = state[NAME_SPACE];

  return film && film.id === filmId ? film : EMPTY_STATE_VALUE;
};

export const getFilterItems = (state) => state[NAME_SPACE].filters;

export const getComments = (state) => state[NAME_SPACE].comments;

export const getFavoriteFilms = (state) => state[NAME_SPACE].favoriteFilms;
