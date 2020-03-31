import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RewardsTable from './RewardsTable';

import {
  createLoadingSelector,
  handleDeleteProductReward,
  handleGetProductRewards,
  handleUpdateProductReward,
  IStoreState,
  ProductAprsFeesRewardsActionTypes,
  selectProductRewards,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductAprsFeesRewardsActionTypes.GET_PRODUCT_REWARDS,
  ProductAprsFeesRewardsActionTypes.DELETE_PRODUCT_REWARD,
]);

const mapStateToProps = (state: IStoreState) => ({
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
