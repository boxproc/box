import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Products from './Products';

import {
  createLoadingSelector,
  handleDeleteProduct,
  handleFilterProducts,
  ProductsActionTypes,
  resetProducts,
  selectInstitutionsOptions,
  selectIsReadOnly,
  selectProductItems,
  selectProductName,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.FILTER_PRODUCTS,
  ProductsActionTypes.DELETE_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  productItems: selectProductItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentProductName: selectProductName(state),
  isReadOnly: selectIsReadOnly(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterProducts: handleFilterProducts,
    deleteProduct: handleDeleteProduct,
    resetProducts,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
