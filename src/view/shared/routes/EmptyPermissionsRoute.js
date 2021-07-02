import PermissionChecker from 'modules/auth/permissionChecker';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function EmptyPermissionsRoute({
  component: Component,
  currentUser,
  path,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          currentUser,
          path
        );

        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: '/auth/signin',
              }}
            />
          );
        }

        if (!permissionChecker.isEmptyPermissions) {
          return <Redirect to="/mobile/lototickets" />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default EmptyPermissionsRoute;
