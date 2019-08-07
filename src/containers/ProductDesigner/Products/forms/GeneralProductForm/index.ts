import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GeneralProductForm from './GeneralProductForm';

import {
  createLoadingSelector,
  handleDeleteProduct,
  handleGetProduct,
  handleUpdateProduct,
  ProductsActionTypes,
  selectCurrentProduct,
  selectCurrentProductName,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.UPDATE_PRODUCT,
  ProductsActionTypes.DELETE_PRODUCT,
  ProductsActionTypes.GET_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectCurrentProduct(state),
  currentProductName: selectCurrentProductName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteProduct: handleDeleteProduct,
    updateProduct: handleUpdateProduct,
    getProduct: handleGetProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralProductForm);
