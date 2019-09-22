import { connect } from 'react-redux';

import Accounts from './Accounts';

import {
  createLoadingSelector,
  LedgerAccountsActionTypes,
  selectLedgerAccounts,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerAccounts: selectLedgerAccounts(state),
});

export default connect(
  mapStateToProps
)(Accounts);
