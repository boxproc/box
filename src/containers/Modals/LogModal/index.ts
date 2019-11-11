import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import LogModal from './LogModal';

import {
  createLoadingSelector,
  handleRefreshLogData,
  selectPayloadLogModal,
  SystemMonitorActionTypes,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  data: selectPayloadLogModal(state),
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
