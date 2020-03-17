import { connect } from 'react-redux';

import ConfirmationModal from './ConfirmationModal';

import { selectPayloadConfirmationModal, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  payloadConfirmModal: selectPayloadConfirmationModal(state),
});

export default connect(
  mapStateToProps
)(ConfirmationModal);
