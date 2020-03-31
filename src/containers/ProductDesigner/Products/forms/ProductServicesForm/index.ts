import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductServicesForm from './ProductServicesForm';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleGetProductServices,
  handleUpdateCardService,
  IStoreState,
  ProductServicesActionTypes,
  selectCurrentProductInstitutionId,
  selectProductCardEndpointsService,
  selectProductCardInterfacesService,
  selectProductServices,
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

const mapStateToProps = (state: IStoreState) => ({
  isLoading: loadingSelector(state),
  isLoadingInterfaces: loadingSelectorInterfaces(state),
  isLoadingEndpoints: loadingSelectorEndpoints(state),
  currentUsersGroupId: activeItemIdSelector(state),
  productInterfacesServiceOptions: selectProductCardInterfacesService(state),
  productEndpointsServiceOptions: selectProductCardEndpointsService(state),
  currentInstitutionId: selectCurrentProductInstitutionId(state),
  initialValues: selectProductServices(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateCardServices: handleUpdateCardService,
    getProductServices: handleGetProductServices,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductServicesForm);
