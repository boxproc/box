import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EndpointForm from './EndpointForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleAddAdminEndpoint,
  handleDeleteAdminEndpoint,
  handleUpdateEndpoint,
  selectAdminCurrentEndpointId,

} from 'store/domains';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.UPDATE_ADMIN_ENDPOINT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentEndpointId: selectAdminCurrentEndpointId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteEndpoint: handleDeleteAdminEndpoint,
    updateAdminEndpoint: handleUpdateEndpoint,
    addAdminEndpoint: handleAddAdminEndpoint,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndpointForm);
