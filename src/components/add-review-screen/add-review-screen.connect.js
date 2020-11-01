import {connect} from "react-redux";
import {Operation} from "../../store/reducers/data/data";
import {ActionCreator} from "../../store/middlewares/redirect";
import ReviewForm from "./add-review-screen";
import {getFilmScreenFullPath} from "../film-screen/route";

export default connect(
    null,
    (dispatch, {filmId}) => ({
      onSubmit(comment) {
        dispatch(Operation.sendComment(
            filmId,
            comment,
            () => dispatch(ActionCreator.redirect(getFilmScreenFullPath(filmId)))
        ));
      }
    })
)(ReviewForm);
