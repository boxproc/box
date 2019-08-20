import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

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

const dirty = isDirty(formNames.GENERAL_PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isDirty: dirty(state),
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
