import React from 'react';
import DocumentTitle from 'react-document-title';
import { Route } from 'react-router-dom';

import { APP_NAME, basePath } from 'consts';

import Root from './Root';

const App = () => {
  return (
    <DocumentTitle title={APP_NAME}>
      <Route path={basePath || '/'} component={Root} />
    </DocumentTitle>
  );
};

export default App;
