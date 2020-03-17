import { connect } from 'react-redux';

import TransactionForm from './TransactionForm';

import { selectLedgerCurrentTransaction, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  initialValues: selectLedgerCurrentTransaction(state),
});

export default connect(
  mapStateToProps
)(TransactionForm);
