import { connect } from 'react-redux';

import MessageModal from './MessageModal';

import { selectPayloadMessageModal, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  payloadMessageModal: selectPayloadMessageModal(state),
});

export default connect(
  mapStateToProps
)(MessageModal);
