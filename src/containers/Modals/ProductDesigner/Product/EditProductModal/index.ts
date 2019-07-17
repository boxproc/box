import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditProductModal from './EditProductModal';

import {
  closeModal,
  createLoadingSelector,
  handleDeleteProduct,
  ProductsActionTypes,
  selectProductId,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.DELETE_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  productId: selectProductId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    deleteProduct: handleDeleteProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductModal);
