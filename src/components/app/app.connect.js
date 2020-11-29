import {connect} from "react-redux";
import {getErrorMessage} from "../../store/reducers/adjustment/selectors";
import App from "./app";

export default connect(
    (state) => ({
      errorMessage: getErrorMessage(state)
    })
)(App);
