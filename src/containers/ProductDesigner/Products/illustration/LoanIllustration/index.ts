import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import LoanIllustration from './LoanIllustration';

import { formNamesConst } from 'consts';

import {
  createLoadingSelector,
  handleConvertTransactionToLoan,
  handleGetProductDetails,
  handleIllustrateLoanProduct,
  LedgerTransactionsActionTypes,
  ProductIllustrationActionTypes,
  ProductsActionTypes,
  resetProductIllustration,
  selectInstitutionLoanProductsOptions,
  selectProductLoanDetails,
  selectProductLoanIllustration,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.PRODUCT_ILLUSTRATION_FORM);

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_DETAILS,
]);

const loadingSelectorIllustration = createLoadingSelector([
  ProductIllustrationActionTypes.ILLUSTRATE_PRODUCT_LOAN,
]);

const loadingSelectorConvertion = createLoadingSelector([
  LedgerTransactionsActionTypes.CONVERT_TRANSACTION_TO_LOAN,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isIllustrationLoading: loadingSelectorIllustration(state),
  isConversionLoading: loadingSelectorConvertion(state),
  loanDetails: selectProductLoanDetails(state),
  productIllustrationData: selectProductLoanIllustration(state),
  loanProductsOptions: selectInstitutionLoanProductsOptions(state),
  selectedLoanProduct: formSelector(state, 'loanProduct'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    illustrateLoanProduct: handleIllustrateLoanProduct,
    getProductDetails: handleGetProductDetails,
    convertTransactionToLoan: handleConvertTransactionToLoan,
    resetProductIllustration,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanIllustration);
