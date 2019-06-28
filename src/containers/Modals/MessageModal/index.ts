import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import MessageModal from './MessageModal';

import {
  closeModal,
  selectFieldsMessageModal,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  fieldsMessageModal: selectFieldsMessageModal(state),
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
)(MessageModal);
