import {getGenresByFilms} from "../../../bl/film";
import {APIRoute, EMPTY_STATE_VALUE} from "../../../const";
import {extend} from "../../../utils/extend";
import {adaptFilmFromServer} from "../../../utils/filmAdapter";

const initialState = {
  promoFilm: EMPTY_STATE_VALUE,
  film: EMPTY_STATE_VALUE, // детальная информация о выбранном фильме
  films: [],
  filters: [],
  comments: [], // комментарии у открытого фильма
  // favoriteFilms: [],
};

export const ActionType = {
  LOAD_FILTERS: `LOAD_FILTERS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FILM: `LOAD_FILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  // LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  // ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  // REMOVE_FROM_FAVORITES: `REMOVE_FROM_FAVORITES`,
};

export const ActionCreator = {
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

export const Operation = {
  fetchFilmsList: () => (dispatch, _getState, api) => (
    api.get(APIRoute.FILMS)
      .then(({data}) => {
        const films = data.map(adaptFilmFromServer);
        const genres = getGenresByFilms(films);

        dispatch(ActionCreator.loadFilms(films));
        dispatch(ActionCreator.loadFilters(genres));
      })
  ),

  fetchPromoFilm: () => (dispatch, _getState, api) => (
    api.get(APIRoute.PROMO_FILM)
      .then(({data}) => adaptFilmFromServer(data))
      .then((film) => dispatch(ActionCreator.loadPromoFilm(film)))
  ),

  fetchFilm: (filmId) => (dispatch, _getState, api) => (
    api.get(`${APIRoute.FILMS}/${filmId}`)
      .then(({data}) => adaptFilmFromServer(data))
      .then((film) => dispatch(ActionCreator.loadFilm(film)))
  ),

  fetchComments: ({filmId}) => (dispatch, _getState, api) => (
    api.get(`${APIRoute.COMMENTS}/${filmId}`)
      .then(({data}) => dispatch(ActionCreator.loadComments(data)))
  ),

  sendComment: (filmId, comment, onSuccess, onError) => (_dispatch, _getState, api) => (
    api.post(`${APIRoute.COMMENTS}/${filmId}`, comment)
      .then(onSuccess)
      .catch(onError)
  ),

  // loadFavoriteFilms: () => (dispatch, getState, api) => {
  //   return api.get(`/favorite`)
  //     .then((response) => {
  //       const favoriteFilms = filmsAdapter(response.data);
  //       dispatch(ActionCreator.loadFavoriteFilms(favoriteFilms));
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // },

  // addToFavorites: (filmId, data) => (dispatch, getState, api) => {
  //   const adaptedData = +data;
  //   return api.post(`/favorite/${filmId}/${adaptedData}`)
  //     .then((response) => {
  //       const favoriteFilm = filmAdapter(response.data);
  //       if (favoriteFilm.isFavorite) {
  //         dispatch(ActionCreator.addToFavorites(favoriteFilm));
  //       } else {
  //         dispatch(ActionCreator.removeFromFavorites(favoriteFilm));
  //       }
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILTERS:
      return extend(state, {
        filters: action.payload
      });

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });

    case ActionType.LOAD_FILM:
      return extend(state, {
        film: action.payload
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });

    // case ActionType.LOAD_FAVORITE_FILMS:
    //   return extend(state, {
    //     favoriteFilms: action.payload
    //   });

    // case ActionType.ADD_TO_FAVORITES:
    //   return extend(state, {
    //     favoriteFilms: [...state.favoriteFilms, action.payload]
    //   });

    // case ActionType.REMOVE_FROM_FAVORITES:
    //   return extend(state, {
    //     favoriteFilms: [...state.favoriteFilms].filter((it) => it.id !== action.payload.id)
    //   });
  }

  return state;
};
