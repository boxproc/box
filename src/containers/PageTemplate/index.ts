import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PageTemplate from './PageTemplate';

import {
  resetUtils,
  selectIsAutoRefresh,
  selectIsOpenFilter,
  selectUiItems,
  setActivePagePermission,
  setIsOpenFilter,
  stopAutoRefresh
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  isAutoRefresh: selectIsAutoRefresh(state),
  isOpenFilter: selectIsOpenFilter(state),
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
