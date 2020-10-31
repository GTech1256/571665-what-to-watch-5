import {connect} from "react-redux";
import App from "./app";

export default connect(
    ({DATA}) => ({promoFilm: DATA.promoFilm})
)(App);
