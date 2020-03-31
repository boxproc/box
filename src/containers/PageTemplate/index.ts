import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PageTemplate from './PageTemplate';

import {
  isAutoRefreshSelector,
  isOpenFilterSelector,
  isReadOnlySelector,
  IStoreState,
  resetUtils,
  setActivePagePermission,
  setIsOpenFilter,
  stopAutoRefresh,
  uiItemsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isAutoRefresh: isAutoRefreshSelector(state),
  isOpenFilter: isOpenFilterSelector(state),
  isReadOnly: isReadOnlySelector(state),
  uiItems: uiItemsSelector(state),
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
