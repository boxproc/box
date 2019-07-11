import React from 'react';
import { Route } from 'react-router-dom';

import { ReactCookieProps, withCookies } from 'react-cookie';

import { basePath } from 'consts';

import Root from './Root';

const App: React.FC<ReactCookieProps> = ({ cookies }) => {
  return (
    <Route path={basePath || '/'} render={() => (<Root cookies={cookies}/>)} />
  );
};

export default withCookies(App);
