import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemMonitor from './SystemMonitor';

import {
  createLoadingSelector,
  handleGetSystemMonitorData,
  resetSystemMonitor,
  selectSystemMonitorEndpoints,
  selectSystemMonitorEndpointsCounts,
  selectSystemMonitorInterfaces,
  selectSystemMonitorInterfacesCounts,
  selectSystemMonitorLastTransaction,
  selectSystemMonitorScheduler,
  selectSystemMonitorSchedulerCounts,
  SystemMonitorActionTypes,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelectorInterfaces = createLoadingSelector([
  SystemMonitorActionTypes.GET_SYSTEM_MONITOR_INTERFACES,
]);
const loadingSelectorEndpoints = createLoadingSelector([
  SystemMonitorActionTypes.GET_SYSTEM_MONITOR_ENDPOINTS,
]);
const loadingSelectorScheduler = createLoadingSelector([
  SystemMonitorActionTypes.GET_SYSTEM_MONITOR_SCHEDULER,
]);
const loadingSelectorLastTransaction = createLoadingSelector([
  SystemMonitorActionTypes.GET_SYSTEM_MONITOR_LAST_TRANSACTION,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoadingInterfaces: loadingSelectorInterfaces(state),
  isLoadingEndpoints: loadingSelectorEndpoints(state),
  isLoadingScheduler: loadingSelectorScheduler(state),
  isLoadingLastTransaction: loadingSelectorLastTransaction(state),
  interfacesData: selectSystemMonitorInterfaces(state),
  endpointsData: selectSystemMonitorEndpoints(state),
  schedulerData: selectSystemMonitorScheduler(state),
  lastTransactionData: selectSystemMonitorLastTransaction(state),
  interfacesCounts: selectSystemMonitorInterfacesCounts(state),
  endpointsCounts: selectSystemMonitorEndpointsCounts(state),
  schedulerCounts: selectSystemMonitorSchedulerCounts(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getSystemMonitorData: handleGetSystemMonitorData,
    resetSystemMonitor,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemMonitor);