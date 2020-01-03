import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductServicesForm from './ProductServicesForm';

import {
  createLoadingSelector,
  handleGetProductServices,
  handleUpdateCardService,
  ProductsActionTypes,
  selectActiveItemId,
  selectCurrentProductInstitutionId,
  selectProductCardEndpointsService,
  selectProductCardInterfacesService,
  selectProductServices
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.UPDATE_CARD_SERVICES,
]);

const loadingSelectorInterfaces = createLoadingSelector([
  ProductsActionTypes.GET_SERVICE_INTERFACES,
]);

const loadingSelectorEndpoints = createLoadingSelector([
  ProductsActionTypes.GET_SERVICE_ENDPOINTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isLoadingInterfaces: loadingSelectorInterfaces(state),
  isLoadingEndpoints: loadingSelectorEndpoints(state),
  currentGroupId: selectActiveItemId(state),
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
