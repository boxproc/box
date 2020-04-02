import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import FeesTable from './FeesTable';

import {
  feeAprsOptionsSelector,
  handleDeleteProductFee,
  handleGetProductFeeAprs,
  handleGetProductFees,
  handleUpdateProductFee,
  isProductFeesDeletingSelector,
  isProductFeesLoadingSelector,
  IStoreState,
  productFeesSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductFeesLoadingSelector(state) || isProductFeesDeletingSelector(state),
  productFees: productFeesSelector(state),
  aprsOptions: feeAprsOptionsSelector(state),
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
