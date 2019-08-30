import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Accounts';

import {
  createLoadingSelector,
  handleFilterLedgerAccounts,
  handleGetLedgerAccounts,
  handleSetLedgerAccountId,
  LedgerAccountsActionTypes,
  selectInstitutionsOptions,
  selectLedgerAccounts,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.GET_LEDGER_ACCOUNTS,
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  ledgerAccounts: selectLedgerAccounts(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getLedgerAccounts: handleGetLedgerAccounts,
    filterLedgerAccounts: handleFilterLedgerAccounts,
    setLedgerAccountsId: handleSetLedgerAccountId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
