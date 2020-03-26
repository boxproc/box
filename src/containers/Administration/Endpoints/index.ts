import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Endpoints from './Endpoints';

import {
  createLoadingSelector,
  currentEndpointNameSelector,
  endpointsSelector,
  handleDeleteEndpoint,
  handleFilterEndpoints,
  handleGetLogData,
  isFilteringOrDeletingEndpointSelector,
  resetEndpoints,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectIsReadOnly,
  StoreState,
  SystemMonitorActionTypes,
} from 'store';

const loadingSelector = createLoadingSelector([
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  currentEndpointId: selectActiveItemId(state),
  currentEndpointName: currentEndpointNameSelector(state),
  endpointItems: endpointsSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  isLoading: loadingSelector(state) || isFilteringOrDeletingEndpointSelector(state),
  isReadOnly: selectIsReadOnly(state),
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
