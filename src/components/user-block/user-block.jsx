import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {SIGN_IN_SCREEN_ROUTE_PATH} from "../sign-in-screen/route";
import {AuthorizationStatus} from "../../const";
import {MY_LIST_SCREEN_ROUTE_PATH} from "../my-list-screen/route";

export const UserBlock = ({
  authorizationStatus
}) => (
  <div className="user-block">
    {authorizationStatus === AuthorizationStatus.AUTH ? (
      <Link to={MY_LIST_SCREEN_ROUTE_PATH}>
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </Link>
    ) : (
      <Link className="user-block__link" to={SIGN_IN_SCREEN_ROUTE_PATH}>Sign in</Link>
    )}
  </div>
);

UserBlock.propTypes = {
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired
};

export default UserBlock;
