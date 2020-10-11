import React from "react";
import PropTypes from "prop-types";

const MAX_RATING_COUNT = 5;

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starValue: null,
      textValue: ``
    };

    this.handleStarChange = this.handleStarChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  render() {
    const {onSubmit} = this.props;
    const {textValue, starValue} = this.state;

    return (
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={onSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {new Array(MAX_RATING_COUNT).fill(``).map((_, index) => {
                const starIndex = index + 1;

                return (
                  <React.Fragment key={starIndex}>
                    <input
                      className="rating__input"
                      id={`star-${starIndex}`}
                      type="radio"
                      name="rating"
                      value={starIndex}
                      onChange={this.handleStarChange}
                      defaultChecked={starValue >= starIndex}
                    />
                    <label
                      className="rating__label"
                      htmlFor={`star-${starIndex}`}
                    >
                      Rating {starIndex}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={textValue}
              onChange={this.handleTextChange}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    );
  }

  handleStarChange({target}) {
    this.setState({
      starValue: target.value
    });
  }

  handleTextChange({target}) {
    this.setState({
      textValue: target.value
    });
  }
}

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

ReviewForm.defaultProps = {
  onSubmit: () => {}
};

export default ReviewForm;
