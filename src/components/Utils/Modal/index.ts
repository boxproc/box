import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Modal from './Modal';

import { handleSetActiveTableRowIndex } from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setActiveTableRowIndex: handleSetActiveTableRowIndex,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Modal);
