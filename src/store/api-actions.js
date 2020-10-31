import {loadFilms, loadPromoFilm, setGenres} from "./action";
import {APIRoute} from "../const";
import {getGenresByFilms} from "../bl/film";
import {adaptFilmFromServer} from "../utils/filmAdapter";

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmFromServer(data))))
);

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      const films = data.map(adaptFilmFromServer);

      dispatch(loadFilms(films));
      dispatch(setGenres(getGenresByFilms(films)));
    })
);

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.LOGIN)
//     .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch((err) => {
//       throw err;
//     })
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoute.LOGIN, {email, password})
//     .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
//     .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
// );
