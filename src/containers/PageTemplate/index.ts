import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PageTemplate from './PageTemplate';

import {
  resetUtils,
  selectIsAutoRefresh,
  selectIsOpenFilter,
  selectIsReadOnly,
  selectUiItems,
  setActivePagePermission,
  setIsOpenFilter,
  stopAutoRefresh,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isAutoRefresh: selectIsAutoRefresh(state),
  isOpenFilter: selectIsOpenFilter(state),
  uiItems: selectUiItems(state),
  isReadOnly: selectIsReadOnly(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    stopAutoRefresh,
    resetUtils,
    setIsOpenFilter,
    setActivePagePermission,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplate);
