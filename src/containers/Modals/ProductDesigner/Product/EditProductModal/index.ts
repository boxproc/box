import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import EditProductModal from './EditProductModal';

import {
  closeModal,
  createLoadingSelector,
  handleDeleteProduct,
  handleUpdateProduct,
  ProductsActionTypes,
  selectDebitProduct,
  selectLoanProduct,
  selectPrepaidProduct,
  selectProductId,
  selectRevolvingCreditProduct,
  selectSavingsProduct,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.DELETE_PRODUCT,
  ProductsActionTypes.GET_PRODUCT,
]);
const formSelector = formValueSelector(formNames.PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  productId: selectProductId(state),
  savingsProduct: selectSavingsProduct(state),
  revolvingCreditProduct: selectRevolvingCreditProduct(state),
  prepaidProduct: selectPrepaidProduct(state),
  loanProduct: selectLoanProduct(state),
  debitProduct: selectDebitProduct(state),
  productTypeValue: formSelector(
    state,
    'productType'
  ),
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
