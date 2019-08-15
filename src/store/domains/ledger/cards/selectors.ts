import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import {
  prepareValuesToRender,
} from './utils';

export const selectDefaultLedgerCards = (state: StoreState) =>
  state.ledger.cards.cards;

export const selectLedgerCards = createSelector(
  selectDefaultLedgerCards,
  items => items && items.asMutable().map(item => prepareValuesToRender(item))
);
