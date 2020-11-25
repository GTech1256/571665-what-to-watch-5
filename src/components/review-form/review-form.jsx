import React from "react";
import PropTypes from "prop-types";

const MAX_RATING_COUNT = 5;

const ReviewForm = ({
  state: {
    textValue,
    starValue
  },
  onSubmit,
  onTextChange,
  onStarChange
}) => {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={(evt) => {
        evt.preventDefault();

        onSubmit({
          rating: starValue,
          comment: textValue
        });
      }}>
        <div className="rating">
          <div className="rating__stars">
            {new Array(MAX_RATING_COUNT).fill(``).map((_element, index) => {
              const starIndex = index + 1;

              return (
                <React.Fragment key={starIndex}>
                  <input
                    className="rating__input"
                    id={`star-${starIndex}`}
                    type="radio"
                    name="rating"
                    value={starIndex}
                    onChange={onStarChange}
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
            name="comment"
            id="review-text"
            placeholder="Review text"
            value={textValue}
            onChange={onTextChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};


ReviewForm.propTypes = {
  state: PropTypes.exact({
    textValue: PropTypes.string.isRequired,
    starValue: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onStarChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default ReviewForm;
