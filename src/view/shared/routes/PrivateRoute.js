import PermissionChecker from 'modules/auth/permissionChecker';
import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from 'view/layout/Layout';
import { getNoLayoutRoutes } from './constants';

const NO_LAYOUT_ROUTES = getNoLayoutRoutes();

function PrivateRoute({
  component: Component,
  currentUser,
  permissionRequired,
  enableBLEServices,
  enableArcFlash,
  enablePandemic,
  enableLOTO,
  path,
  ...rest
}) {
  console.log("permissionRequired -------", permissionRequired);
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
                state: { from: props.location },
              }}
            />
          );
        }

        // temporarily disabled isEmailVerified permission
        // if (!permissionChecker.isEmailVerified) {
        //   return <Redirect to="/auth/email-unverified" />;
        // }

        if (permissionChecker.isEmptyPermissions) {
          return <Redirect to="/auth/empty-permissions" />;
        }

        if (!permissionChecker.match(permissionRequired)) {
          return <Redirect to="/403" />;
        }

        if (!permissionChecker.checkBLEServicesSetting(enableBLEServices)) {
          return <Redirect to="/403" />;
        }

        if (!permissionChecker.checkLOTOServicesSetting(enableLOTO)) {
          return <Redirect to="/403" />;
        }

        if (!permissionChecker.checkArcFlashServicesSetting(enableArcFlash)) {
          return <Redirect to="/403" />;
        }

        if (!permissionChecker.checkPandemicServicesSetting(enablePandemic)) {
          return <Redirect to="/403" />;
        }

        return (
          <Fragment>
            {NO_LAYOUT_ROUTES.includes(path) ?
              <Component {...props} /> :
              <Layout {...props}>
                <Component {...props} />
              </Layout>}
          </Fragment>
        );
      }}
    />
  );
}

export default PrivateRoute;
