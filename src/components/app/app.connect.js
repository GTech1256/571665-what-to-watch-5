import {connect} from "react-redux";
import App from "./app";

export default connect(
    ({promoFilm}) => ({promoFilm})
)(App);
