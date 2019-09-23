import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Endpoints from './Endpoints';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleDeleteAdminEndpoint,
  handleFilterAdminEndpoint,
  selectAdminCurrentEndpointName,
  selectAdminEndpoints,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.FILTER_ADMIN_ENDPOINT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  adminEndpointItems: selectAdminEndpoints(state),
  adminCurrentEndpointName: selectAdminCurrentEndpointName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteEndpoint: handleDeleteAdminEndpoint,
    filterAdminEndpoint: handleFilterAdminEndpoint,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Endpoints);
