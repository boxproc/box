import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import LoanIllustration from './LoanIllustration';

import { formNamesConst } from 'consts';

import {
  createLoadingSelector,
  handleConvertTrToLoan,
  handleGetProductDetails,
  handleIllustrateLoan,
  isConvertingTrToLoanSelector,
  isLoanIllustrationLoadingSelector,
  IStoreState,
  loanIllustrationSelector,
  ProductsActionTypes,
  resetProductIllustration,
  selectInstitutionLoanProductsOptions,
  selectProductLoanDetails,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_ILLUSTRATION_FORM);

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_DETAILS,
]);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: loadingSelector(state),
  isIllustrationLoading: isLoanIllustrationLoadingSelector(state),
  isConversionLoading: isConvertingTrToLoanSelector(state),
  loanDetails: selectProductLoanDetails(state),
  productIllustrationData: loanIllustrationSelector(state),
  loanProductsOptions: selectInstitutionLoanProductsOptions(state),
  selectedLoanProduct: formSelector(state, 'loanProduct'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    illustrateLoanProduct: handleIllustrateLoan,
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
