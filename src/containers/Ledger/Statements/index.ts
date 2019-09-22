import { connect } from 'react-redux';

import Statements from './Statements';

import {
  createLoadingSelector,
  LedgerStatementsActionTypes,
  selectLedgerStatements,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerStatements: selectLedgerStatements(state),
});

export default connect(
  mapStateToProps
)(Statements);
