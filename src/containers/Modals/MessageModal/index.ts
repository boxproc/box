import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import MessageModal from './MessageModal';

import { selectPayloadMessageModal } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  payloadMessageModal: selectPayloadMessageModal(state),
});

export default withRouter(connect(
  mapStateToProps
)(MessageModal));
