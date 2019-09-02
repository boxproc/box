import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import Products from './Products';

import {
  createLoadingSelector,
  handleFilterProducts,
  handleGetProductId,
  handleGetProducts,
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

const dirty = isDirty(formNames.PRODUCTS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isFilterFormDirty: dirty(state),
  productItems: selectProductItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
  filterProductParams: selectFilterProductParams(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProducts: handleGetProducts,
    filterProducts: handleFilterProducts,
    getProductId: handleGetProductId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
