import withState from "../../hocs/with-state/with-state";
import ReviewForm from "./review-form";

const INITIAL_START_COUNT = `3`;
const INITIAL_TEXT = ``;

export default withState(
    {
      starValue: INITIAL_START_COUNT,
      textValue: INITIAL_TEXT
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
      },
    })
)(ReviewForm);
