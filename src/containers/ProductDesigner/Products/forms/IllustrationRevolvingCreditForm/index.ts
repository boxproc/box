import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import IllustrationRevolvingCredit from './IllustrationRevolvingCredit';

import {
  createLoadingSelector,
  handleIllustrateRevolvingCreditProduct,
  ProductsActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
//   currentProductType: selectCurrentProductType,
//   productIllustration: selectProductLoanIllustration(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
     illustrateRevolvingCreditProduct: handleIllustrateRevolvingCreditProduct,
    // getProductDetails: handleGetProductDetails,
    // resetIllustrationLoan,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IllustrationRevolvingCredit);
