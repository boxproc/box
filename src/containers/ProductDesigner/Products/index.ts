import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Products from './Products';

import {
  createLoadingSelector,
  handleFilterProducts,
  handleGetProduct,
  handleGetProducts,
  openModal,
  ProductsActionTypes,
  selectFilterProductParams,
  selectInstitutionsOptions,
  selectProductItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCTS,
  ProductsActionTypes.FILTER_PRODUCTS,
  ProductsActionTypes.ADD_PRODUCT,
  ProductsActionTypes.UPDATE_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  productItems: selectProductItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
  filterProductParams: selectFilterProductParams(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProducts: handleGetProducts,
    filterProducts: handleFilterProducts,
    getProduct: handleGetProduct,
    openModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
