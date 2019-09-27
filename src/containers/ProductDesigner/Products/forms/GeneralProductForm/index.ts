import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GeneralProductForm from './GeneralProductForm';

import {
  createLoadingSelector,
  handleDeleteProduct,
  handleUpdateProduct,
  ProductsActionTypes,
  selectCurrentProduct,
  selectCurrentProductName,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.UPDATE_PRODUCT,
  ProductsActionTypes.DELETE_PRODUCT,
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
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralProductForm);
