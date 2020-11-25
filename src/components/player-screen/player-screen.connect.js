import {connect} from "react-redux";
import PlayerScreen from "./player-screen";
import {ActionCreator} from "../../store/middlewares/redirect";
import {getFilmScreenFullPath} from "../film-screen/route";

export default connect(
    null,
    (dispatch, {filmId}) => ({
      onExitButtonClick() {
        dispatch(ActionCreator.redirect(getFilmScreenFullPath(filmId)));
      },
    })
)(PlayerScreen);

