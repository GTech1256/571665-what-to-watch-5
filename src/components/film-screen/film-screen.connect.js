import {connect} from "react-redux";
import {getSimilarFilms} from "../../bl/film";
import {ActionCreator as RedirectActionCreator} from "../../store/middlewares/redirect";
import DataOperation from "../../store/reducers/data/operation";
import DataActionCreator from "../../store/reducers/data/action-creator";
import {getComments, getFilms} from "../../store/reducers/data/selectors";
import {getAuthorizationStatus} from "../../store/reducers/user/selectors";
import {getPlayerScreenFullPath} from "../player-screen/route";
import FilmScreen from "./film-screen";

export default connect(
    (state, {film}) => {
      const films = getFilms(state);

      return {
        film,
        similarFilms: getSimilarFilms(films, film),
        filmReviews: getComments(state),
        authorizationStatus: getAuthorizationStatus(state)
      };
    },
    (dispatch, {film, filmId}) => ({
      fetchReview() {
        dispatch(DataOperation.fetchComments({filmId}));
      },
      onPlayBtnClick() {
        dispatch(RedirectActionCreator.redirect(getPlayerScreenFullPath(filmId)));
      },
      onMyListBtnClick() {
        const onSuccess = (filmData) => dispatch(DataActionCreator.loadFilm(filmData));

        dispatch(DataOperation.changeFavoriteFilmStatus(film, onSuccess));
      }
    })
)(FilmScreen);
