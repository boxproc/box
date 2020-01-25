import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import LoanIllustration from './LoanIllustration';

import {
  createLoadingSelector,
  handleGetProductDetails,
  handleIllustrateLoanProduct,
  ProductIllustrationActionTypes,
  resetProductIllustration,
  selectCurrentProductDetails,
  selectCurrentProductType,
  selectProductLoanIllustration,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductIllustrationActionTypes.ILLUSTRATE_PRODUCT_LOAN,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  loanDetails: selectCurrentProductDetails(state),
  currentProductType: selectCurrentProductType,
  productIllustrationData: selectProductLoanIllustration(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    illustrateLoanProduct: handleIllustrateLoanProduct,
    getProductDetails: handleGetProductDetails,
    resetProductIllustration,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanIllustration);
