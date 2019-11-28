import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AccountStatements from './AccountStatements';

import {
  createLoadingSelector,
  handleGetLedgerAccountStatements,
  LedgerStatementsActionTypes,
  selectActiveItemId,
  selectLedgerAccountStatements,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.GET_LEDGER_ACCOUNT_STATEMENTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  accountCurrentId: selectActiveItemId(state),
  accountStatements: selectLedgerAccountStatements(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getLedgerAccountStatements: handleGetLedgerAccountStatements,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountStatements);
