import {withState} from "../../hocs/with-state/with-state";
import ReviewForm from "./review-form";

export default withState(
    {
      starValue: ``,
      textValue: ``
    },
    (setState) => ({
      onStarChange({target}) {
        setState({
          starValue: target.value
        });
      },

      onTextChange({target}) {
        setState({
          textValue: target.value
        });
      }
    })
)(ReviewForm);
