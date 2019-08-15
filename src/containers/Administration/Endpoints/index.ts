import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Endpoints from './Endpoints';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleGetAdminEndpoint,
  handleSetAdminEndpointId,
  openModal,
  selectAdminEndpoints,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
    AdminEndpointsActionTypes.GET_ADMIN_ENDPOINT,
    AdminEndpointsActionTypes.FILTER_ADMIN_ENDPOINT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  adminEndpointItems: selectAdminEndpoints(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
    getAdminEndpoint: handleGetAdminEndpoint,
    setAdminEndpointId: handleSetAdminEndpointId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Endpoints);
