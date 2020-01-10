import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { basePath } from 'consts';
import { storageUtil } from 'utils';

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
  const isLoggedIn = React.useMemo(
    () => storageUtil.getLoginFlag(),
    []
  );

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
