import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Products from './Products';

import {
  handleDeleteProduct,
  handleFilterProducts,
  isProductsDeletingSelector,
  isProductsFilteringSelector,
  isReadOnlySelector,
  IStoreState,
  productNameSelector,
  productsSelector,
  resetProducts,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductsFilteringSelector(state) || isProductsDeletingSelector(state),
  productItems: productsSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  currentProductName: productNameSelector(state),
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
