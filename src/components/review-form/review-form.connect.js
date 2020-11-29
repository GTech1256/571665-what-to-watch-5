import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Operation} from "../../store/reducers/data/data";
import {ActionCreator} from "../../store/middlewares/redirect";
import {getFilmScreenFullPath} from "../film-screen/route";
import ReviewForm from "./review-form";

export default withRouter(
    connect(
        null,
        (dispatch, {match}) => ({
          onSubmit(comment, onSuccess, onError) {
            const filmId = match.params.id;

            dispatch(Operation.sendComment(
                filmId,
                comment,
                () => {
                  onSuccess();
                  dispatch(ActionCreator.redirect(getFilmScreenFullPath(filmId)));
                },
                onError
            ));
          }
        })
    )(ReviewForm)
);
