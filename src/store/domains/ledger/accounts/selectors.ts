import { createSelector } from 'reselect';

import {
  selectCyclesDescriptionsOptions,
  selectInstitutionProductsOptions,
} from 'store/domains/productDesigner';
import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';
// tslint:disable-next-line: max-line-length
import { prepareValuesToRender as prepareLastStatementValuesToRender } from 'store/domains/ledger/statements/utils';
import { selectActiveItemId } from 'store/domains/utils';

import {
  preparedAccountCardsToRender,
  preparedValuesDetailsToRender,
  preparedValuesToRender
} from './utils';

export const selectDefaultLedgerAccounts = (state: StoreState) =>
  state.ledger.accounts.accounts && state.ledger.accounts.accounts.asMutable();

export const selectLedgerAccounts = createSelector(
  selectDefaultLedgerAccounts,
  selectInstitutionsOptions,
  (items, institutions) => items && items.map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return {
      ...preparedValuesToRender(item),
      institutionId: institution && institution.label,
    };
  })
);

export const selectDefaultLedgerAccountCards = (state: StoreState) =>
  state.ledger.accounts.cards.asMutable();

export const selectLedgerAccountCards = createSelector(
  selectDefaultLedgerAccountCards,
  items => items && items.map(item => preparedAccountCardsToRender(item))
);
export const selectLedgerCurrentAccount = createSelector(
  selectActiveItemId,
  selectInstitutionsOptions,
  selectInstitutionProductsOptions,
  selectDefaultLedgerAccounts,
  selectCyclesDescriptionsOptions,
  (currentId, institutions, institutionProducts, accounts, cyclesOptions) => {
    const current = accounts.find(el => el.id === currentId);

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: current && institutions.find(el => el.value === current.institution_id),
      product: current && institutionProducts.find(el => el.value === current.product_id),
      statementCycle: current && cyclesOptions.find(el => el.value === current.statement_cycle_id),
    };
  }
);

export const selectLedgerCurrentAccountAlias = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.accountAlias
);

export const selectLedgerCurrentAccountProductType = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.productType
);

export const selectLedgerCurrentAccountProductOverrideId = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.productOverrideId
);

export const selectLedgerCurrentAccountHasProductOverride = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.productOverrideId ? true : false
);

export const selectDefaultLedgerLastStatement = (state: StoreState) =>
  state.ledger.accounts.lastStatement;

export const selectLedgerLastStatement = createSelector(
  selectDefaultLedgerLastStatement,
  lastStatement => lastStatement && prepareLastStatementValuesToRender(lastStatement)
);

// export const selectLedgerLastStatementForAccount = createSelector(
//   selectDefaultLedgerLastStatement,
//   lastStatement => {
//     if (!lastStatement) {
//       return null;
//     }

//     return {
//         id: lastStatement.id,
//         firstTransactionId: lastStatement.first_transaction_id,
//         lastTransactionId: lastStatement.last_transaction_id,
//         statementDate: lastStatement.statement_date,
//         balanceOpen: lastStatement.balance_open && lastStatement.balance_open.toFixed(2),
//         balanceClose: lastStatement.balance_close && lastStatement.balance_close.toFixed(2),
//         minimumAmountDueRepayment: lastStatement.minimum_amount_due_repayment
//           && lastStatement.minimum_amount_due_repayment.toFixed(2),
//         statementCycle: lastStatement.statement_cycle_description,
//       };
//   }
// );
