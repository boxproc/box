import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RewardsTable from './RewardsTable';

import {
  handleDeleteProductReward,
  handleGetProductRewards,
  handleUpdateProductReward,
  isProductRewardsDeletingSelector,
  isProductRewardsLoadingSelector,
  IStoreState,
  productRewardsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductRewardsLoadingSelector(state) || isProductRewardsDeletingSelector(state),
  productRewards: productRewardsSelector(state),
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
