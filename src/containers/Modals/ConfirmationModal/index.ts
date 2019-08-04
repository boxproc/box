import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ConfirmationModal from './ConfirmationModal';

import {
  closeModal,
  selectConfirmModalAction,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  confirmAction: selectConfirmModalAction(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationModal);
