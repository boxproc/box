import React from 'react';
import { Redirect, Route } from 'react-router';

import { basePath, cookiesNames } from 'consts';
import { cookiesUtil } from 'utils';

interface PrivateRouteProps {
  path: string;
  component: any;
}

const isLoggedIn = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          isLoggedIn
            ? <Component {...props} />
            : <Redirect
              to={{
                pathname: `${basePath}login`,
                state: { from: props.location },
              }}
            />
        );
      }}
    />
  );
};

export default PrivateRoute;
