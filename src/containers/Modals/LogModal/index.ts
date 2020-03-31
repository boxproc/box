import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import LogModal from './LogModal';

import {
  handleRefreshLogData,
  isSysMonitorLoadingLogDataSelector,
  IStoreState,
  payloadLogModalSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isSysMonitorLoadingLogDataSelector(state),
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
