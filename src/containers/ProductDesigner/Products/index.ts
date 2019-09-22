import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Products from './Products';

import {
  createLoadingSelector,
  handleDeleteProduct,
  handleFilterProducts,
  ProductsActionTypes,
  selectCurrentProductName,
  selectInstitutionsOptions,
  selectProductItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.FILTER_PRODUCTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  productItems: selectProductItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentProductName: selectCurrentProductName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterProducts: handleFilterProducts,
    deleteProduct: handleDeleteProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
