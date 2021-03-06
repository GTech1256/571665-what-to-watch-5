import {connect} from "react-redux";
import PlayerScreen from "./player-screen";
import {ActionCreator as RedirectActionCreator} from "../../store/middlewares/redirect";
import {getFilmScreenFullPath} from "../film-screen/route";

export default connect(
    null,
    (dispatch, {filmId}) => ({
      onExitButtonClick() {
        dispatch(RedirectActionCreator.redirect(getFilmScreenFullPath(filmId)));
      },
    })
)(PlayerScreen);

