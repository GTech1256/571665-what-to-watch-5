import {connect} from "react-redux";
import {Operation} from "../../store/reducers/user/user";
import SignInScreen from "./sign-in-screen";

export default connect(
    null,
    (dispatch) => ({
      onSubmit(formData, onError) {
        dispatch(Operation.login(formData, onError));
      }
    })
)(SignInScreen);
