import { connect } from 'react-redux';

import MessageModal from './MessageModal';

import { IStoreState, payloadMessageModalSelector } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  payloadMessageModal: payloadMessageModalSelector(state),
});

export default connect(
  mapStateToProps
)(MessageModal);
