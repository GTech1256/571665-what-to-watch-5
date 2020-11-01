import {withState} from "../../hocs/with-state/with-state";
import ReviewForm from "./review-form";

export default withState(
    {
      starValue: `3`,
      textValue: ``
    },
    (setState, props, state) => ({
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

      onSubmit(evt) {
        evt.preventDefault();

        props.onSubmit({
          rating: state.starValue,
          comment: state.textValue
        });
      }
    })
)(ReviewForm);
