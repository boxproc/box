import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import FeesTable from './FeesTable';

import {
  createLoadingSelector,
  handleDeleteProductFee,
  handleGetProductFeeAprs,
  handleGetProductFees,
  handleUpdateProductFee,
  ProductsActionTypes,
  selectAprsOptions,
  selectProductFees,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_FEES,
  ProductsActionTypes.DELETE_PRODUCT_FEE,
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
