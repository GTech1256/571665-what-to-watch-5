import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import SignInScreen from "./sign-in-screen";

export default connect(
    null,
    (dispatch) => ({
      onSubmit(formData) {
        dispatch(login(formData));
      }
    })
)(SignInScreen);
