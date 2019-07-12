import React from 'react';

import { uiItemConsts } from 'consts';

export const Customers = () => (
  <React.Fragment>{uiItemConsts.LEDGER_CUSTOMERS}</React.Fragment>
);

export const Accounts = () => (
  <React.Fragment>{uiItemConsts.LEDGER_ACCOUNTS}</React.Fragment>
);

export const Countries = () => (
  <React.Fragment>{uiItemConsts.ADMINISTRATION_DICTIONARIES_COUNTRIES}</React.Fragment>
);

export const Currencies = () => (
  <React.Fragment>{uiItemConsts.ADMINISTRATION_DICTIONARIES_CURRENCIES}</React.Fragment>
);

export const HomePage = () => (
  <React.Fragment>Welcome!</React.Fragment>
);
