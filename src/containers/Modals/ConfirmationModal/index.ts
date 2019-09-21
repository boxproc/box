import { connect } from 'react-redux';

import ConfirmationModal from './ConfirmationModal';

import { selectPayloadConfirmationModal } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  payloadConfirmModal: selectPayloadConfirmationModal(state),
});

export default connect(
  mapStateToProps
)(ConfirmationModal);
