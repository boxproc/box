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
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT,
  ProductsActionTypes.DELETE_PRODUCT,
]);

const updatingLoadingSelector = createLoadingSelector([
  ProductsActionTypes.UPDATE_PRODUCT,
]);

const formSelector = formValueSelector(formNamesConst.GENERAL_PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isUpdating: updatingLoadingSelector(state),
  initialValues: selectCurrentProduct(state),
  currentInstitution: formSelector(
    state,
    'institutionId'
  ),
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
