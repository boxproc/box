import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import DirectDebit from './DirectDebit';

import {
  activeItemIdSelector,
  currentCustomerCountryCodeSelector,
  directDebitsMandatesSelector,
  handleAddDirectDebitAccount,
  handleGetDirectDebitMandates,
  isAddingDirectDebitAccountSelector,
  isGettingDirectDebitMandatesSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingDirectDebitAccountSelector(state),
  customerId: activeItemIdSelector(state),
  customerCountryCode: currentCustomerCountryCodeSelector(state),
  isMandatesLoading: isGettingDirectDebitMandatesSelector(state),
  mandates: directDebitsMandatesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addDirectDebitAccount: handleAddDirectDebitAccount,
    getMandates: handleGetDirectDebitMandates,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectDebit);
