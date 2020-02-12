import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Endpoints from './Endpoints';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleDeleteAdminEndpoint,
  handleFilterAdminEndpoints,
  handleGetLogData,
  resetEndpoints,
  selectActiveItemId,
  selectAdminCurrentEndpointName,
  selectAdminEndpoints,
  selectInstitutionsOptions,
  selectIsReadOnly,
  SystemMonitorActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.FILTER_ADMIN_ENDPOINTS,
  AdminEndpointsActionTypes.DELETE_ADMIN_ENDPOINT,
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  endpointItems: selectAdminEndpoints(state),
  currentEndpointName: selectAdminCurrentEndpointName(state),
  currentEndpointId: selectActiveItemId(state),
  isReadOnly: selectIsReadOnly(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteEndpoint: handleDeleteAdminEndpoint,
    filterEndpoints: handleFilterAdminEndpoints,
    getLogData: handleGetLogData,
    resetEndpoints,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Endpoints);
