import React, {useState, useCallback, useMemo} from "react";
import PropTypes from "prop-types";
import {makeErrorMessage} from "../../utils/makeErrorMessage";

const INITIAL_SERVER_ERROR_MESSAGE = ``;
const INITIAL_FORM_DISABLE = false;
const MAX_RATING_COUNT = 5;
const INITIAL_START_COUNT = `3`;
const TEXT = {
  INIT_VALUE: ``,
  LENGTH_MAX: 400,
  LENGTH_MIN: 50
};

const ErrorMessage = {
  TEXT_LENGTH_MIN: `Minimum of ${TEXT.LENGTH_MIN} characters in the review text`,
  TEXT_LENGTH_MAX: `Maximum of ${TEXT.LENGTH_MAX} characters in the review text`,
  EMPTY: ``
};

const getErrorMessage = (text, minCount, maxCount) => {
  if (text.length < minCount) {
    return ErrorMessage.TEXT_LENGTH_MIN;
  }

  if (text.length > maxCount) {
    return ErrorMessage.TEXT_LENGTH_MAX;
  }

  return ErrorMessage.EMPTY;
};

const ReviewForm = ({
  onSubmit
}) => {
  const [serverErrorMessage, setServerErrorMessage] = useState(INITIAL_SERVER_ERROR_MESSAGE);
  const [disabled, setDisabled] = useState(INITIAL_FORM_DISABLE);
  const [starValue, setStarValue] = useState(INITIAL_START_COUNT);
  const [textValue, setTextValue] = useState(TEXT.INIT_VALUE);

  const isTextValid = useMemo(
      () => textValue.length >= TEXT.LENGTH_MIN && textValue.length <= TEXT.LENGTH_MAX,
      [textValue]
  );

  const errorMessage = useMemo(
      () => serverErrorMessage || getErrorMessage(textValue, TEXT.LENGTH_MIN, TEXT.LENGTH_MAX),
      [textValue, serverErrorMessage]
  );

  const handleStarValueChange = useCallback(({target}) => {
    setStarValue(target.value);
  }, [setStarValue]);

  const handleTextValueChange = useCallback(({target}) => {
    setTextValue(target.value);
  }, [setTextValue]);

  const handleSubmitSuccess = useCallback(() => {
    setDisabled(false);
    setServerErrorMessage(INITIAL_SERVER_ERROR_MESSAGE);
  }, [setDisabled, setServerErrorMessage]);

  const handleSubmitError = useCallback((error) => {
    setDisabled(false);

    setServerErrorMessage(makeErrorMessage(error));
  }, [setDisabled, setServerErrorMessage]);

  const handleSubmit = useCallback(
      (evt) => {
        evt.preventDefault();

        if (!isTextValid) {
          return;
        }

        setDisabled(true);

        onSubmit(
            {
              rating: starValue,
              comment: textValue
            },
            handleSubmitSuccess,
            handleSubmitError
        );
      },
      [
        onSubmit,
        isTextValid,
        starValue,
        textValue,
        handleSubmitSuccess,
        handleSubmitError
      ]
  );

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
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
                    defaultChecked={starValue >= starIndex}
                    disabled={disabled}
                    onChange={handleStarValueChange}
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

        <p className={`review__error ${errorMessage === ErrorMessage.EMPTY ? `review__error_hidden` : ``}`}>
          {errorMessage}
        </p>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment"
            id="review-text"
            placeholder="Review text"
            value={textValue}
            disabled={disabled}
            onChange={handleTextValueChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={disabled || !isTextValid}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};


ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
