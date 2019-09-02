import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Modal from './Modal';

import {
  closeModal,
  handleSetActiveTableRowIndex,
  openModal,
} from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    openModal,
    setActiveTableRowIndex: handleSetActiveTableRowIndex,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Modal);
