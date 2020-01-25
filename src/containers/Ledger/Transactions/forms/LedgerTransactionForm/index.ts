import { connect } from 'react-redux';

import LedgerTransactionForm from './LedgerTransactionForm';

import { selectLedgerCurrentTransaction } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  initialValues: selectLedgerCurrentTransaction(state),
});

export default connect(
  mapStateToProps
)(LedgerTransactionForm);
