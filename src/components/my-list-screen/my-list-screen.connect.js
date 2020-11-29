import {connect} from "react-redux";
import {getFavoriteFilms} from "../../store/reducers/data/selectors";
import Operation from "../../store/reducers/data/operation";
import ActionCreator from "../../store/reducers/data/action-creator";
import MyListScreen from "./my-list-screen";
import {EMPTY_STATE_VALUE} from "../../const";

export default connect(
    (state) => ({
      films: getFavoriteFilms(state)
    }),
    (dispatch) => ({
      fetchFavoriteFilms() {
        dispatch(Operation.fetchFavoriteFilms());
      },
      resetFavoriteFilms() {
        dispatch(ActionCreator.loadFavoriteFilms(EMPTY_STATE_VALUE));
      }
    })
)(MyListScreen);
