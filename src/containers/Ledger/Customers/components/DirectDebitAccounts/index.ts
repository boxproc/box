import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import DirectDebitAccounts from './DirectDebitAccounts';

import {
  activeItemIdSelector,
  currentCustomerCountryCodeSelector,
  handleAddDirectDebitAccount,
  isAddingDirectDebitAccountSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingDirectDebitAccountSelector(state),
  customerId: activeItemIdSelector(state),
  customerCountryCode: currentCustomerCountryCodeSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addDirectDebitAccount: handleAddDirectDebitAccount,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectDebitAccounts);
