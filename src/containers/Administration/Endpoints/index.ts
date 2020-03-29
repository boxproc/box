import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Endpoints from './Endpoints';

import {
  activeItemIdSelector,
  createLoadingSelector,
  currentEndpointNameSelector,
  endpointsSelector,
  handleDeleteEndpoint,
  handleFilterEndpoints,
  handleGetLogData,
  isDeletingEndpointSelector,
  isFilteringEndpointsSelector,
  isReadOnlySelector,
  resetEndpoints,
  StoreState,
  SystemMonitorActionTypes,
  userInstitutionsOptionsSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  currentEndpointId: activeItemIdSelector(state),
  currentEndpointName: currentEndpointNameSelector(state),
  endpointItems: endpointsSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  isLoading: loadingSelector(state)
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
