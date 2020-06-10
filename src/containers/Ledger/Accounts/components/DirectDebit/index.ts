import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import DirectDebit from './DirectDebit';

import {
  activeItemIdSelector,
  directDebitsMandatesSelector,
  handleGetDirectDebitMandates,
  handleMakeDefaultDirectDebitMandate,
  isChangingDirectDebitMandateSelector,
  isGettingDirectDebitMandatesSelector,
  IStoreState,
  resetDirectDebitMandates,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isGettingDirectDebitMandatesSelector(state),
  isChangingMandate: isChangingDirectDebitMandateSelector(state),
  accountId: activeItemIdSelector(state),
  mandates: directDebitsMandatesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getMandates: handleGetDirectDebitMandates,
    makeDefault: handleMakeDefaultDirectDebitMandate,
    resetDirectDebitMandates,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectDebit);
