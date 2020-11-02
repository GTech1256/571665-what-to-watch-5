import {connect} from "react-redux";
import {getSimilarFilms} from "../../bl/film";
import {Operation} from "../../store/reducers/data/data";
import {getComments, getFilms} from "../../store/reducers/data/selectors";
import {getAuthorizationStatus} from "../../store/reducers/user/selectors";
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
    (dispatch, {filmId}) => ({
      fetchReview() {
        dispatch(Operation.fetchComments({filmId}));
      }
    })
)(FilmScreen);
