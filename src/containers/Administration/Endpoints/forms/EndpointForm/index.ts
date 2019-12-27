import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EndpointForm from './EndpointForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  DictionaryConstsActionTypes,
  handleAddAdminEndpoint,
  handleDeleteAdminEndpoint,
  handleGetDictionaryEndpointTypes,
  handleUpdateEndpoint,
  selectEndpointTypesOptions,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.UPDATE_ADMIN_ENDPOINT,
]);

const loadingTypesSelector = createLoadingSelector([
  DictionaryConstsActionTypes.GET_DICTIONARY_ENDPOINT_TYPES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isLoadingTypesSelector: loadingTypesSelector(state),
  endpointTypesOptions: selectEndpointTypesOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteEndpoint: handleDeleteAdminEndpoint,
    updateAdminEndpoint: handleUpdateEndpoint,
    addAdminEndpoint: handleAddAdminEndpoint,
    getDictionaryEndpointTypes: handleGetDictionaryEndpointTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndpointForm);
