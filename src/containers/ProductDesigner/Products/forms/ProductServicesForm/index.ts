import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductServicesForm from './ProductServicesForm';

import {
  activeItemIdSelector,
  handleGetProductServices,
  handleUpdateProductServices,
  isProductServiceUpdatingSelector,
  isServiceEndpointsLoadingSelector,
  isServiceInterfacesLoadingSelector,
  IStoreState,
  productServicesSelector,
  selectCurrentProductInstitutionId,
  servicesEndpointsOptionsSelector,
  servicesInterfacesOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductServiceUpdatingSelector(state),
  isLoadingInterfaces: isServiceInterfacesLoadingSelector(state),
  isLoadingEndpoints: isServiceEndpointsLoadingSelector(state),
  currentUsersGroupId: activeItemIdSelector(state),
  servicesInterfacesOptions: servicesInterfacesOptionsSelector(state),
  servicesEndpointsOptions: servicesEndpointsOptionsSelector(state),
  currentInstitutionId: selectCurrentProductInstitutionId(state),
  initialValues: productServicesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateProductServices: handleUpdateProductServices,
    getProductServices: handleGetProductServices,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductServicesForm);
