import { connect } from 'react-redux';

import MessageModal from './MessageModal';

import { payloadMessageModalSelector, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  payloadMessageModal: payloadMessageModalSelector(state),
});

export default connect(
  mapStateToProps
)(MessageModal);
