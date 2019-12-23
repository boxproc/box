import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import IllustrationForm from './IllustrationForm';

import { illustrationInitialValues } from 'containers/ProductDesigner/Products/consts';

import {
  createLoadingSelector,
  handleIllustrateLoanProduct,
  ProductsActionTypes,
  resetIllustrationLoan,
  selectCurrentProductType,
  selectProductLoanIllustration,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.ILLUSTRATE_PRODUCT_LOAN,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: illustrationInitialValues,
  currentProductType: selectCurrentProductType,
  productIllustration: selectProductLoanIllustration(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    illustrateLoanProduct: handleIllustrateLoanProduct,
    resetIllustrationLoan,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IllustrationForm);
