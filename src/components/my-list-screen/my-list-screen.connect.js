import {connect} from "react-redux";
import MyListScreen from "./my-list-screen";

export default connect(
    ({films}) => ({films: films.filter(({isFavorite}) => !!isFavorite)})
)(MyListScreen);
