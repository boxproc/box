import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RewardsTable from './RewardsTable';

import {
  createLoadingSelector,
  handleDeleteProductReward,
  handleGetProductRewards,
  handleUpdateProductReward,
  ProductsActionTypes,
  selectProductRewards,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_REWARDS,
  ProductsActionTypes.DELETE_PRODUCT_REWARD,
  ProductsActionTypes.UPDATE_PRODUCT_REWARD,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  productRewards: selectProductRewards(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductRewards: handleGetProductRewards,
    deleteProductReward: handleDeleteProductReward,
    updateProductReward: handleUpdateProductReward,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardsTable);
