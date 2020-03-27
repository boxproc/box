import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EndpointForm from './EndpointForm';

import {
  activeItemIdSelector,
  handleAddEndpoint,
  handleDeleteEndpoint,
  handleGetDictionaryEndpointTypes,
  handleUpdateEndpoint,
  isLoadingEndpointsTypesSelector,
  isUpdatingEndpointSelector,
  selectEndpointTypesOptions,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isUpdatingEndpointSelector(state),
  isLoadingTypesSelector: isLoadingEndpointsTypesSelector(state),
  endpointTypesOptions: selectEndpointTypesOptions(state),
  currentEndpointId: activeItemIdSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteEndpoint: handleDeleteEndpoint,
    updateEndpoint: handleUpdateEndpoint,
    addEndpoint: handleAddEndpoint,
    getDictionaryEndpointTypes: handleGetDictionaryEndpointTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndpointForm);
