import { connect } from 'react-redux';

import ConfirmationModal from './ConfirmationModal';

import { IStoreState, payloadConfirmationModalSelector } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  payloadConfirmModal: payloadConfirmationModalSelector(state),
});

export default connect(
  mapStateToProps
)(ConfirmationModal);
