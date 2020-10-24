import React, {memo} from "react";
import PropTypes from "prop-types";

export const ShowMoreBtn = ({
  onClick
}) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={onClick}
    >
        Show more
    </button>
  </div>
);

ShowMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default memo(ShowMoreBtn);
