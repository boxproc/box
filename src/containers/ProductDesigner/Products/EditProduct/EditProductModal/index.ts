import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditProductModal from './EditProductModal';

import {
  closeModal,
  createLoadingSelector,
  handleDeleteProduct,
  handleUpdateProduct,
  ProductsActionTypes,
  selectCurrentProduct,
  selectCurrentProductId,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.DELETE_PRODUCT,
  ProductsActionTypes.GET_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentProductId: selectCurrentProductId(state),
  currentProduct: selectCurrentProduct(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    deleteProduct: handleDeleteProduct,
    updateProduct: handleUpdateProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductModal);
