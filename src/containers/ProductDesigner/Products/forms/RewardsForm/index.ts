import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import RewardsForm from './RewardsForm';

import {
  handleAddProductReward,
  isProductRewardsAddingSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_REWARDS);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductRewardsAddingSelector(state),
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
