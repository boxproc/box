import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { basePath, cookiesNames } from 'consts';
import { cookiesUtil } from 'utils';

interface PrivateRouteProps {
  path: string;
  component: React.ElementType;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  exact,
  ...rest
}) => {
  const isLoggedIn = cookiesUtil.get(cookiesNames.SESSION_ID)
    && !cookiesUtil.get(cookiesNames.AUTH_PENDING);

  return (
    <Route
      {...rest}
      exact={exact}
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
