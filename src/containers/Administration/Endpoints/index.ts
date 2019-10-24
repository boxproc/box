import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Endpoints from './Endpoints';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleDeleteAdminEndpoint,
  handleFilterAdminEndpoint,
  handleGetLogData,
  resetEndpoints,
  selectActiveItemId,
  selectAdminCurrentEndpointName,
  selectAdminEndpoints,
  selectInstitutionsOptions,
  SystemMonitorActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.FILTER_ADMIN_ENDPOINT,
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  adminEndpointItems: selectAdminEndpoints(state),
  adminCurrentEndpointName: selectAdminCurrentEndpointName(state),
  currentEndPointId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteEndpoint: handleDeleteAdminEndpoint,
    filterAdminEndpoint: handleFilterAdminEndpoint,
    getLogData: handleGetLogData,
    resetEndpoints,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Endpoints);
