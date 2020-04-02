import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import LoanIllustration from './LoanIllustration';

import { formNamesConst } from 'consts';

import {
  handleConvertTrToLoan,
  handleGetProductDetails,
  handleIllustrateLoan,
  instLoanProductsOptionsSelector,
  isConvertingTrToLoanSelector,
  isLoanIllustrationLoadingSelector,
  isProductDetailsLoadingSelector,
  IStoreState,
  loanIllustrationSelector,
  productLoanDetailsSelector,
  resetProductIllustration,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_ILLUSTRATION_FORM);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductDetailsLoadingSelector(state),
  isIllustrationLoading: isLoanIllustrationLoadingSelector(state),
  isConversionLoading: isConvertingTrToLoanSelector(state),
  loanDetails: productLoanDetailsSelector(state),
  productIllustrationData: loanIllustrationSelector(state),
  loanProductsOptions: instLoanProductsOptionsSelector(state),
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
