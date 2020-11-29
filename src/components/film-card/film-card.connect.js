import {connect} from "react-redux";
import {ActionCreator as RedirectActionCreator} from "../../store/middlewares/redirect";
import {getFilmScreenFullPath} from "../film-screen/route";
import FilmCard from "./film-card";

export default connect(
    null,
    (dispatch, {film}) => ({
      onClick() {
        dispatch(RedirectActionCreator.redirect(getFilmScreenFullPath(film.id)));
      }
    })
)(FilmCard);
