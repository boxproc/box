import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Products from './Products';

import {
  createLoadingSelector,
  handleDeleteProduct,
  handleFilterProducts,
  isReadOnlySelector,
  ProductsActionTypes,
  resetProducts,
  selectInstitutionsOptions,
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
  isReadOnly: isReadOnlySelector(state),
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
