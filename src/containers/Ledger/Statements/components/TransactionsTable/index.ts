import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TransactionsTable from './TransactionsTable';

import {
  handleGetLedgerStatementTransactions,
  selectLedgerCurrentStatementTransaction,
  selectLedgerStatementTransactions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
    ledgerCurrentStatementTransaction: selectLedgerCurrentStatementTransaction(state),
    ledgerStatementTransactions: selectLedgerStatementTransactions(state),
  });
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getLedgerStatementTransactions: handleGetLedgerStatementTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsTable);
