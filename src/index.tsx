import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { CookiesProvider } from 'react-cookie';

import { theme, ThemeProvider } from 'theme';
import { GlobalStyles } from 'theme/global';

import App from 'containers';

import store, { history } from './store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <CookiesProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    </CookiesProvider>
  ),
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
