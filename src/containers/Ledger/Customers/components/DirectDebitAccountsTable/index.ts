import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import DirectDebitAccountsTable from './DirectDebitAccountsTable';

import {
  directDebitsAccountsSelector,
  handleAddDirectDebitMandate,
  handleGetDirectDebitAccounts,
  isAddingDirectDebitMandateSelector,
  isGettingDirectDebitAccountsSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isGettingDirectDebitAccountsSelector(state),
  isAddingMandate: isAddingDirectDebitMandateSelector(state),
  accounts: directDebitsAccountsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAccounts: handleGetDirectDebitAccounts,
    addMandate: handleAddDirectDebitMandate,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectDebitAccountsTable);
