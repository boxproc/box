import { connect } from 'react-redux';

import TransactionForm from './TransactionForm';

import { currentTransactionSelector, IStoreState } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  initialValues: currentTransactionSelector(state),
});

export default connect(
  mapStateToProps
)(TransactionForm);
