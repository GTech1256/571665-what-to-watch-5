import {connect} from "react-redux";
import {getFavoriteFilms} from "../../store/reducers/data/selectors";
import MyListScreen from "./my-list-screen";

export default connect(
    (state) => ({films: getFavoriteFilms(state)})
)(MyListScreen);
