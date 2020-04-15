import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { basePath } from 'consts';
import { storageUtil } from 'utils';

interface IPrivateRoute {
  component: React.ElementType;
  exact?: boolean;
  path: string;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({
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
      render={props => (
        isLoggedIn
          ? <Component {...props} />
          : <Redirect
            to={{
              pathname: `${basePath}login`,
              state: { from: props.location },
            }}
          />
      )}
    />
  );
};

export default PrivateRoute;
