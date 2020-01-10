import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import RewardsForm from './RewardsForm';

import {
  createLoadingSelector,
  handleAddProductReward,
  ProductAprsFeesRewardsActionTypes,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductAprsFeesRewardsActionTypes.ADD_PRODUCT_REWARD,
]);
const formSelector = formValueSelector(formNamesConst.PRODUCT_REWARDS);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  rewardApplicationConditionValue: formSelector(state, 'rewardApplicationCondition'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addProductReward: handleAddProductReward,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardsForm);
