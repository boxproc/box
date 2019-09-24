import { connect } from 'react-redux';

import MessageModal from './MessageModal';

import { selectPayloadMessageModal } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  payloadMessageModal: selectPayloadMessageModal(state),
});

export default connect(
  mapStateToProps
)(MessageModal);
