import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { basePath, cookiesNames } from 'consts';
import { cookiesUtil } from 'utils';

interface PrivateRouteProps {
  path: string;
  component: any;
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
        cookiesUtil.getCookie(cookiesNames.SESSION_ID)
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
