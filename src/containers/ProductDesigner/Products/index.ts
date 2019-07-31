import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Products from './Products';

import {
  createLoadingSelector,
  handleFilterProducts,
  handleGetProductId,
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
    getProductId: handleGetProductId,
    openModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
