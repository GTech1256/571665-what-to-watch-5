import {connect} from "react-redux";
import {Operation} from "../../store/reducers/user/user";
import SignInScreen from "./sign-in-screen";

export default connect(
    null,
    (dispatch) => ({
      onSubmit(formData) {
        dispatch(Operation.login(formData));
      }
    })
)(SignInScreen);
