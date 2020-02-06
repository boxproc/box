import { connect } from 'react-redux';

import TransactionForm from './TransactionForm';

import { selectLedgerCurrentTransaction } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  initialValues: selectLedgerCurrentTransaction(state),
});

export default connect(
  mapStateToProps
)(TransactionForm);
