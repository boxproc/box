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
}) =>  (
  <Route
    {...rest}
    exact={exact}
    render={props => {
      return (
        cookiesUtil.get(cookiesNames.SESSION_ID) && !cookiesUtil.get(cookiesNames.AUTH_PENDING)
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

export default PrivateRoute;
