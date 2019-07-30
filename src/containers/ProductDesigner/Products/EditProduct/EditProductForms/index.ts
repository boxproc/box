import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditProductForms from './EditProductForms';

import {
  createLoadingSelector,
  handleDeleteProduct,
  ProductsActionTypes,
  selectCurrentProductId,
  selectCurrentProductType,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.DELETE_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentProductId: selectCurrentProductId(state),
  currentProductType: selectCurrentProductType(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteProduct: handleDeleteProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductForms);
