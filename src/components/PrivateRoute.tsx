import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { basePath, sessionStorageNames } from 'consts';

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
  const isLoggedIn = sessionStorage.getItem(sessionStorageNames.IS_LOGIN);

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
