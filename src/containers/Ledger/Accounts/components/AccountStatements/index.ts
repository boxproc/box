import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AccountStatements from './AccountStatements';

import {
  accountStatementsSelector,
  createLoadingSelector,
  handleGetAccountStatements,
  handleGetStatementAprs,
  LedgerStatementsActionTypes,
  selectActiveItemId,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.GET_ACCOUNT_STATEMENTS,
  LedgerStatementsActionTypes.GET_STATEMENT_APRS,
]);

const mapStateToProps = (state: StoreState) => ({
  accountCurrentId: selectActiveItemId(state),
  accountStatements: accountStatementsSelector(state),
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAccountStatements: handleGetAccountStatements,
    getStatementAprs: handleGetStatementAprs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountStatements);
