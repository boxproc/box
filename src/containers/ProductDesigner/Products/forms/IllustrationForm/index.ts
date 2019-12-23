import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import IllustrationForm from './IllustrationForm';

import {
  createLoadingSelector,
  handleIllustrateLoanProduct,
  ProductsActionTypes,
  resetIllustrationLoan,
  selectCurrentProductType,
  selectProductLoanIllustration,
} from 'store/domains';

import { StoreState } from 'store/StoreState';
import { dateUtil } from 'utils';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.ILLUSTRATE_PRODUCT_LOAN,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: {
      startDate: dateUtil.todayDate,
      amount: 1200,
      nrLoanCycles: 10,
  },
  currentProductType: selectCurrentProductType,
  productIlustration: selectProductLoanIllustration(state),
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
