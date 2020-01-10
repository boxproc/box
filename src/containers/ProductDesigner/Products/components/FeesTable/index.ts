import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import FeesTable from './FeesTable';

import {
  createLoadingSelector,
  handleDeleteProductFee,
  handleGetProductFeeAprs,
  handleGetProductFees,
  handleUpdateProductFee,
  ProductAprsFeesRewardsActionTypes,
  selectAprsOptions,
  selectProductFees,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductAprsFeesRewardsActionTypes.GET_PRODUCT_FEES,
  ProductAprsFeesRewardsActionTypes.DELETE_PRODUCT_FEE,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  productFees: selectProductFees(state),
  aprsOptions: selectAprsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductFees: handleGetProductFees,
    getProductFeeApr: handleGetProductFeeAprs,
    deleteProductFee: handleDeleteProductFee,
    updateProductFee: handleUpdateProductFee,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeesTable);
