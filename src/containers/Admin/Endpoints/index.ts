import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Endpoints from './Endpoints';

import {
  activeItemIdSelector,
  currentEndpointNameSelector,
  endpointsSelector,
  handleDeleteEndpoint,
  handleFilterEndpoints,
  handleGetLogData,
  isDeletingEndpointSelector,
  isFilteringEndpointsSelector,
  isReadOnlySelector,
  isSysMonitorLoadingLogDataSelector,
  IStoreState,
  resetEndpoints,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentEndpointId: activeItemIdSelector(state),
  currentEndpointName: currentEndpointNameSelector(state),
  endpointItems: endpointsSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  isLoading: isSysMonitorLoadingLogDataSelector(state)
    || isFilteringEndpointsSelector(state)
    || isDeletingEndpointSelector(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteEndpoint: handleDeleteEndpoint,
    filterEndpoints: handleFilterEndpoints,
    getLogData: handleGetLogData,
    resetEndpoints,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Endpoints);
