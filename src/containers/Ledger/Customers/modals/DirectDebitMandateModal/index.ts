import { connect } from 'react-redux';

import DirectDebitMandateModal from './DirectDebitMandateModal';

import {
  IStoreState,
  payloadDirectDebitMandateModalSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  details: payloadDirectDebitMandateModalSelector(state),
});

export default connect(
  mapStateToProps
)(DirectDebitMandateModal);
