import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import LoanIllustration from './LoanIllustration';

import { formNamesConst } from 'consts';

import {
  currentTrInstitutionSelector,
  handleConvertTrToLoan,
  handleGetInstProducts,
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
  currentInstitution: currentTrInstitutionSelector(state),
  isConversionLoading: isConvertingTrToLoanSelector(state),
  isIllustrationLoading: isLoanIllustrationLoadingSelector(state),
  isLoading: isProductDetailsLoadingSelector(state),
  loanDetails: productLoanDetailsSelector(state),
  loanProductsOptions: instLoanProductsOptionsSelector(state),
  productIllustrationData: loanIllustrationSelector(state),
  selectedLoanProduct: formSelector(state, 'loanProduct'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    convertTransactionToLoan: handleConvertTrToLoan,
    getInstProducts: handleGetInstProducts,
    getProductDetails: handleGetProductDetails,
    illustrateLoanProduct: handleIllustrateLoan,
    resetProductIllustration,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanIllustration);
