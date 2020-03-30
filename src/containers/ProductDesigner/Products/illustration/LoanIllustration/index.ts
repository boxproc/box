import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import LoanIllustration from './LoanIllustration';

import { formNamesConst } from 'consts';

import {
  createLoadingSelector,
  handleConvertTrToLoan,
  handleGetProductDetails,
  handleIllustrateLoanProduct,
  isConvertingTrToLoanSelector,
  ProductIllustrationActionTypes,
  ProductsActionTypes,
  resetProductIllustration,
  selectInstitutionLoanProductsOptions,
  selectProductLoanDetails,
  selectProductLoanIllustration,
  StoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_ILLUSTRATION_FORM);

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_DETAILS,
]);

const loadingSelectorIllustration = createLoadingSelector([
  ProductIllustrationActionTypes.ILLUSTRATE_PRODUCT_LOAN,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isIllustrationLoading: loadingSelectorIllustration(state),
  isConversionLoading: isConvertingTrToLoanSelector(state),
  loanDetails: selectProductLoanDetails(state),
  productIllustrationData: selectProductLoanIllustration(state),
  loanProductsOptions: selectInstitutionLoanProductsOptions(state),
  selectedLoanProduct: formSelector(state, 'loanProduct'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    illustrateLoanProduct: handleIllustrateLoanProduct,
    getProductDetails: handleGetProductDetails,
    convertTransactionToLoan: handleConvertTrToLoan,
    resetProductIllustration,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanIllustration);
