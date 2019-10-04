import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TablePage from './TablePage';

import { resetUtils, selectIsAutoRefresh, stopAutoRefresh } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  isAutoRefresh: selectIsAutoRefresh(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    stopAutoRefresh,
    resetUtils,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablePage);
