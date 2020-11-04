import ActionType from "./action-type";

export default {
  addToFavorites: (film) => ({
    type: ActionType.ADD_TO_FAVORITES,
    payload: film
  }),

  removeFromFavorites: (film) => ({
    type: ActionType.REMOVE_FROM_FAVORITES,
    payload: film
  }),

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

  // loadFavoriteFilms: (favoriteFilms) => {
  //   return {
  //     type: ActionType.LOAD_FAVORITE_FILMS,
  //     payload: favoriteFilms
  //   };
  // }
};
