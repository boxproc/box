import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemMonitor from './SystemMonitor';

import {
  handleGetLogData,
  handleGetSysMonitorData,
  isSysMonitorEndpointsLoadingSelector,
  isSysMonitorInterfacesLoadingSelector,
  isSysMonitorLastTransactionsLoadingSelector,
  isSysMonitorLoadingLogDataSelector,
  isSysMonitorSchedulerLoadingSelector,
  IStoreState,
  resetSysMonitor,
  sysMonitorEndpointsCountsSelector,
  sysMonitorEndpointsSelector,
  sysMonitorInterfacesCountsSelector,
  sysMonitorInterfacesSelector,
  sysMonitorLastTransactionsSelector,
  sysMonitorSchedulerCountsSelector,
  sysMonitorSchedulerSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isSysMonitorLoadingLogDataSelector(state),
  isLoadingInterfaces: isSysMonitorInterfacesLoadingSelector(state),
  isLoadingEndpoints: isSysMonitorEndpointsLoadingSelector(state),
  isLoadingScheduler: isSysMonitorSchedulerLoadingSelector(state),
  isLoadingLastTransactions: isSysMonitorLastTransactionsLoadingSelector(state),
  interfacesData: sysMonitorInterfacesSelector(state),
  endpointsData: sysMonitorEndpointsSelector(state),
  schedulerData: sysMonitorSchedulerSelector(state),
  lastTransactionsData: sysMonitorLastTransactionsSelector(state),
  interfacesCounts: sysMonitorInterfacesCountsSelector(state),
  endpointsCounts: sysMonitorEndpointsCountsSelector(state),
  schedulerCounts: sysMonitorSchedulerCountsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getSysMonitorData: handleGetSysMonitorData,
    getLogData: handleGetLogData,
    resetSysMonitor,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemMonitor);
