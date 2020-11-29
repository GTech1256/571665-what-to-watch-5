import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

const PrivateRoute = ({
  render,
  path,
  exact,
  authorizationStatus,
  expectedAuthorizationStatus,
  redirectTo
}) => (
  <Route
    path={path}
    exact={exact}
    render={(routeProps) => {
      return (
        authorizationStatus === expectedAuthorizationStatus
          ? render(routeProps)
          : <Redirect to={redirectTo} />
      );
    }}
  />
);

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  expectedAuthorizationStatus: PropTypes.oneOf(Object.keys(AuthorizationStatus)).isRequired,
  redirectTo: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
