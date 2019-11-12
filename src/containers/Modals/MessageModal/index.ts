import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import MessageModal from './MessageModal';

import { selectPayloadMessageModal, setIsRelogin } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  payloadMessageModal: selectPayloadMessageModal(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setIsRelogin,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModal);
