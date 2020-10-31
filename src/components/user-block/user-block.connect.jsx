import {connect} from "react-redux";
import UserBlock from "./user-block";

export default connect(
    ({USER}) => ({authorizationStatus: USER.authorizationStatus})
)(UserBlock);
