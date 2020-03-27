import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PageTemplate from './PageTemplate';

import {
  isAutoRefreshSelector,
  isOpenFilterSelector,
  isReadOnlySelector,
  resetUtils,
  selectUiItems,
  setActivePagePermission,
  setIsOpenFilter,
  stopAutoRefresh,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isAutoRefresh: isAutoRefreshSelector(state),
  isOpenFilter: isOpenFilterSelector(state),
  isReadOnly: isReadOnlySelector(state),
  uiItems: selectUiItems(state),
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
