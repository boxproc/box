import { connect } from 'react-redux';

import ConfirmationModal from './ConfirmationModal';

import { payloadConfirmationModalSelector, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  payloadConfirmModal: payloadConfirmationModalSelector(state),
});

export default connect(
  mapStateToProps
)(ConfirmationModal);
