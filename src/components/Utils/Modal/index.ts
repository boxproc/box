import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Modal from './Modal';

import {
  handleSetActiveItemId,
  handleSetActiveTableRowIndex,
} from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setActiveTableRowIndex: handleSetActiveTableRowIndex,
    setActiveItemId: handleSetActiveItemId,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Modal);
