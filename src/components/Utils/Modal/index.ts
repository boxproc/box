import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Modal from './Modal';

import {
  handleSetActiveItemId,
  handleSetActiveTableRowIndex,
  handleSetIsClearActiveIds,
} from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setActiveTableRowIndex: handleSetActiveTableRowIndex,
    setActiveItemId: handleSetActiveItemId,
    setIsClearActiveIds: handleSetIsClearActiveIds,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Modal);
