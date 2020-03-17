import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GeneralProductForm from './GeneralProductForm';

import {
  createLoadingSelector,
  handleDeleteProduct,
  handleGetProduct,
  handleUpdateProduct,
  ProductsActionTypes,
  selectCurrentProduct,
  selectCurrentProductName,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT,
]);

const loadingSelectorUpdateDelete = createLoadingSelector([
  ProductsActionTypes.DELETE_PRODUCT,
  ProductsActionTypes.UPDATE_PRODUCT,
]);

const formSelector = formValueSelector(formNamesConst.GENERAL_PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isUpdatingOrDeleting: loadingSelectorUpdateDelete(state),
  initialValues: selectCurrentProduct(state),
  currentProductName: selectCurrentProductName(state),
  currentInstitution: formSelector(state, 'institutionId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProduct: handleGetProduct,
    deleteProduct: handleDeleteProduct,
    updateProduct: handleUpdateProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralProductForm);
