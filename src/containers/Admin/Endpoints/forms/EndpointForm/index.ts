import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EndpointForm from './EndpointForm';

import {
  activeItemIdSelector,
  endpointTypesOptionsSelector,
  handleAddEndpoint,
  handleDeleteEndpoint,
  handleGetDictionaryEndpointTypes,
  handleUpdateEndpoint,
  isLoadingEndpointsTypesSelector,
  IStoreState,
  isUpdatingEndpointSelector,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isUpdatingEndpointSelector(state),
  isLoadingTypesSelector: isLoadingEndpointsTypesSelector(state),
  endpointTypesOptions: endpointTypesOptionsSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
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
