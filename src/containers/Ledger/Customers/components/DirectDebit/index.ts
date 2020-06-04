import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import DirectDebit from './DirectDebit';

import {
  activeItemIdSelector,
  currentCustomerCountryCodeSelector,
  directDebitsMandatesSelector,
  handleAddDirectDebitAccount,
  handleChangeDirectDebitMandate,
  handleGetDirectDebitMandates,
  isAddingDirectDebitAccountSelector,
  isChangingDirectDebitMandateSelector,
  isGettingDirectDebitMandatesSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingDirectDebitAccountSelector(state),
  isChangingMandate: isChangingDirectDebitMandateSelector(state),
  customerId: activeItemIdSelector(state),
  customerCountryCode: currentCustomerCountryCodeSelector(state),
  isMandatesLoading: isGettingDirectDebitMandatesSelector(state),
  mandates: directDebitsMandatesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addDirectDebitAccount: handleAddDirectDebitAccount,
    getMandates: handleGetDirectDebitMandates,
    changeMandate: handleChangeDirectDebitMandate,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectDebit);
