import ActionType from "./action-type";

export default {
  loadFilters: (filters) => ({
    type: ActionType.LOAD_FILTERS,
    payload: filters
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),

  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film
  }),

  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),

  loadFavoriteFilms: (favoriteFilms) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: favoriteFilms
  }),
};
