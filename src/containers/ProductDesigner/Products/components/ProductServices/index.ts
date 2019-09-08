import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductServices from './ProductServices';

import {
  createLoadingSelector,
  handleGetEndpointsService,
  handleGetInterfacesService,
  ProductsActionTypes,
  selectProductCardEndpointsService,
  selectProductCardInterfacesService,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_SERVICE_INTERFACES,
  ProductsActionTypes.GET_SERVICE_ENDPOINTS,
]);
const mapStateToProps = (state: StoreState) => ({
  isLoadingServices: loadingSelector(state),
  productInterfacesServiceOptions: selectProductCardInterfacesService(state),
  productEndpointsServiceOptions: selectProductCardEndpointsService(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInterfacesService: handleGetInterfacesService,
    getEndpointsService: handleGetEndpointsService,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductServices);
