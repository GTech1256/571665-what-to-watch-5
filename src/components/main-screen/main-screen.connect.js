import {connect} from "react-redux";
import {ActionCreator as RedirectActionCreator} from "../../store/middlewares/redirect";
import {getPromoFilm} from "../../store/reducers/data/selectors";
import Operation from "../../store/reducers/data/operation";
import {getPlayerScreenFullPath} from "../player-screen/route";
import DataActionCreator from "../../store/reducers/data/action-creator";
import MainScreen from "./main-screen";

export default connect(
    (state) => ({
      filmPromo: getPromoFilm(state)
    }),
    (dispatch) => ({
      onMyListBtnClick(film) {
        const onSuccess = (filmData) => dispatch(DataActionCreator.loadPromoFilm(filmData));

        dispatch(Operation.changeFavoriteFilmStatus(film, onSuccess));
      },
      onPlayBtnClick(filmId) {
        dispatch(RedirectActionCreator.redirect(getPlayerScreenFullPath(filmId)));
      },
    })
)(MainScreen);
