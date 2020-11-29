import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../store/reducers/user/selectors";
import PrivateRoute from "./private-route";

export default connect(
    (state) => ({
      authorizationStatus: getAuthorizationStatus(state),
    })
)(PrivateRoute);
