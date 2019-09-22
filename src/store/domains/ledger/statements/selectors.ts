import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';

import { prepareValuesToRender } from './utils';

export const selectDefaultLedgerStatements = (state: StoreState) =>
  state.ledger.statements.statements;

export const selectLedgerStatements = createSelector(
  selectDefaultLedgerStatements,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...prepareValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectLedgerCurrentStatement = createSelector(
  selectLedgerStatements,
  selectActiveItemId,
  (statement, currentId) => {
    const current = statement.find(el => el.id === currentId);

    return current;
  }
);
