import ActionCreator from "./action-creator";
import {getGenresByFilms} from "../../../bl/film";
import {getAuthorizationStatus} from "../user/selectors";
import {APIRoute, AuthorizationStatus} from "../../../const";
import {adaptFilmFromServer} from "../../../utils/filmAdapter";
import {ActionCreator as RedirectActionCreator} from "../../middlewares/redirect";
import {MY_LIST_SCREEN_ROUTE_PATH} from "../../../components/my-list-screen/route";

const FILM_FAVORITE_STATUS_ADD = 1;
const FILM_FAVORITE_STATUS_REMOVE = 0;

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

  fetchFavoriteFilms: () => (dispatch, _getState, api) => (
    api.get(APIRoute.FAVORITE)
      .then(({data}) => data.map(adaptFilmFromServer))
      .then((favoriteFilms) => dispatch(ActionCreator.loadFavoriteFilms(favoriteFilms)))
  ),

  changeFavoriteFilmStatus: (film, onSuccess) => (dispatch, getState, api) => {
    const state = getState();
    const authorizationStatus = getAuthorizationStatus(state);
    const {id, isFavorite} = film;
    const newFavoriteStatus = isFavorite ? FILM_FAVORITE_STATUS_REMOVE : FILM_FAVORITE_STATUS_ADD;

    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      dispatch(RedirectActionCreator.redirect(MY_LIST_SCREEN_ROUTE_PATH));
      return Promise.resolve();
    }

    return api.post(`${APIRoute.FAVORITE}/${id}/${newFavoriteStatus}`)
      .then(({data}) => adaptFilmFromServer(data))
      .then(onSuccess);
  },
};
