import {connect} from "react-redux";
import MyListScreen from "./my-list-screen";

export default connect(
    ({DATA}) => ({films: DATA.films.filter(({isFavorite}) => !!isFavorite)})
)(MyListScreen);
