import {connect} from "react-redux";
import {getPromoFilm} from "../../store/reducers/data/selectors";
import App from "./app";

export default connect(
    (state) => ({promoFilm: getPromoFilm(state)})
)(App);
