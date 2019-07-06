import React from 'react';
import { Route } from 'react-router-dom';

import { basePath } from 'consts';

import Root from './Root';

const App = () => {
  return (
    <Route path={basePath || '/'} component={() => <Root/>} />
  );
};

export default App;
