export const ActionType = {
  TOGGLE_GENRE_FILTER: `TOGGLE_GENRE_FILTER`,
  SET_GENRES: `SET_GENRES`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILMS: `LOAD_PROMO_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

export const toggleGenreFilter = (genre) => ({
  type: ActionType.TOGGLE_GENRE_FILTER,
  payload: genre
});

export const setGenres = (genres) => ({
  type: ActionType.SET_GENRES,
  payload: genres
});

export const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILMS,
  payload: film
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

