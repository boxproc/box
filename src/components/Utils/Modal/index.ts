import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Modal from './Modal';

import {
  handleSetActiveItemId,
  handleSetActiveTableRowIndex,
  handleSetIsClearActiveIds,
  selectIsEditModalOpened,
  setIsEditModalOpened,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  isEditModalOpened: selectIsEditModalOpened(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setActiveTableRowIndex: handleSetActiveTableRowIndex,
    setActiveItemId: handleSetActiveItemId,
    setIsClearActiveIds: handleSetIsClearActiveIds,
    setIsEditModalOpened,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
