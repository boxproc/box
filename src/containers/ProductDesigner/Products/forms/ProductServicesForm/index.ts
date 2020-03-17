import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductServicesForm from './ProductServicesForm';

import {
  createLoadingSelector,
  handleGetProductServices,
  handleUpdateCardService,
  ProductServicesActionTypes,
  selectActiveItemId,
  selectCurrentProductInstitutionId,
  selectProductCardEndpointsService,
  selectProductCardInterfacesService,
  selectProductServices,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductServicesActionTypes.UPDATE_CARD_SERVICES,
]);

const loadingSelectorInterfaces = createLoadingSelector([
  ProductServicesActionTypes.GET_SERVICE_INTERFACES,
]);

const loadingSelectorEndpoints = createLoadingSelector([
  ProductServicesActionTypes.GET_SERVICE_ENDPOINTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isLoadingInterfaces: loadingSelectorInterfaces(state),
  isLoadingEndpoints: loadingSelectorEndpoints(state),
  currentUserGroupId: selectActiveItemId(state),
  productInterfacesServiceOptions: selectProductCardInterfacesService(state),
  productEndpointsServiceOptions: selectProductCardEndpointsService(state),
  currentInstitutionId: selectCurrentProductInstitutionId(state),
  initialValues: selectProductServices(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateCardService: handleUpdateCardService,
    getProductServices: handleGetProductServices,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductServicesForm);
