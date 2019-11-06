import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PageTemplate from './PageTemplate';

import {
  handleSetIsOpenFilter,
  resetUtils,
  selectIsAutoRefresh,
  selectIsOpenFilter,
  stopAutoRefresh,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  isAutoRefresh: selectIsAutoRefresh(state),
  isOpenFilter: selectIsOpenFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    stopAutoRefresh,
    resetUtils,
    setIsOpenFilter: handleSetIsOpenFilter,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplate);
