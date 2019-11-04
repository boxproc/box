import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemMonitor from './SystemMonitor';

import {
  createLoadingSelector,
  handleGetLogData,
  handleGetSystemMonitorData,
  resetSystemMonitor,
  selectSystemMonitorEndpoints,
  selectSystemMonitorEndpointsCounts,
  selectSystemMonitorInterfaces,
  selectSystemMonitorInterfacesCounts,
  selectSystemMonitorLastTransactions,
  selectSystemMonitorScheduler,
  selectSystemMonitorSchedulerCounts,
  SystemMonitorActionTypes,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  SystemMonitorActionTypes.GET_LOG_DATA,
]);
const loadingSelectorInterfaces = createLoadingSelector([
  SystemMonitorActionTypes.GET_SYSTEM_MONITOR_INTERFACES,
]);
const loadingSelectorEndpoints = createLoadingSelector([
  SystemMonitorActionTypes.GET_SYSTEM_MONITOR_ENDPOINTS,
]);
const loadingSelectorScheduler = createLoadingSelector([
  SystemMonitorActionTypes.GET_SYSTEM_MONITOR_SCHEDULER,
]);
const loadingSelectorLastTransactions = createLoadingSelector([
  SystemMonitorActionTypes.GET_SYSTEM_MONITOR_LAST_TRANSACTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isLoadingInterfaces: loadingSelectorInterfaces(state),
  isLoadingEndpoints: loadingSelectorEndpoints(state),
  isLoadingScheduler: loadingSelectorScheduler(state),
  isLoadingLastTransactions: loadingSelectorLastTransactions(state),
  interfacesData: selectSystemMonitorInterfaces(state),
  endpointsData: selectSystemMonitorEndpoints(state),
  schedulerData: selectSystemMonitorScheduler(state),
  lastTransactionsData: selectSystemMonitorLastTransactions(state),
  interfacesCounts: selectSystemMonitorInterfacesCounts(state),
  endpointsCounts: selectSystemMonitorEndpointsCounts(state),
  schedulerCounts: selectSystemMonitorSchedulerCounts(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getSystemMonitorData: handleGetSystemMonitorData,
    getLogData: handleGetLogData,
    resetSystemMonitor,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemMonitor);
