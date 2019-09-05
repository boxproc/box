import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import Products from './Products';

import {
  createLoadingSelector,
  handleDeleteProduct,
  handleFilterProducts,
  handleGetProductId,
  ProductsActionTypes,
  selectCurrentProductName,
  selectInstitutionsOptions,
  selectProductItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.FILTER_PRODUCTS,
]);

const dirty = isDirty(formNames.PRODUCTS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isFilterFormDirty: dirty(state),
  productItems: selectProductItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentProductName: selectCurrentProductName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterProducts: handleFilterProducts,
    getProductId: handleGetProductId,
    deleteProduct: handleDeleteProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
