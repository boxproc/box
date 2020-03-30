import { connect } from 'react-redux';

import TransactionForm from './TransactionForm';

import { currentTransactionSelector, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  initialValues: currentTransactionSelector(state),
});

export default connect(
  mapStateToProps
)(TransactionForm);
