import {connect} from "react-redux";
import FilmScreen from "./film-screen";

export default connect(
    ({films}) => ({films})
)(FilmScreen);
