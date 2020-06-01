import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import DirectDebitAccountModal from './DirectDebitAccountModal';

import {
  directDebitsMandatesSelector,
  handleGetDirectDebitMandates,
  isGettingDirectDebitMandatesSelector,
  IStoreState,
  payloadDirectDebitAccountModalSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  account: payloadDirectDebitAccountModalSelector(state),
  mandates: directDebitsMandatesSelector(state),
  isMandatesLoading: isGettingDirectDebitMandatesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getMandates: handleGetDirectDebitMandates,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectDebitAccountModal);
