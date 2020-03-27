import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import LogModal from './LogModal';

import {
  createLoadingSelector,
  handleRefreshLogData,
  payloadLogModalSelector,
  StoreState,
  SystemMonitorActionTypes,
} from 'store';

const loadingSelector = createLoadingSelector([
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  data: payloadLogModalSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    refreshLogData: handleRefreshLogData,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogModal);
