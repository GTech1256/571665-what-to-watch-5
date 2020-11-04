import {getGenresByFilms} from "../../../bl/film";
import {adaptFilmFromServer} from "../../../utils/filmAdapter";
import {APIRoute} from "../../../const";
import ActionCreator from "./action-creator";

export default {
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
