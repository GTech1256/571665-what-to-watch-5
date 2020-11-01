import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../store/reducers/user/selectors";
import UserBlock from "./user-block";

export default connect(
    (state) => ({authorizationStatus: getAuthorizationStatus(state)})
)(UserBlock);
