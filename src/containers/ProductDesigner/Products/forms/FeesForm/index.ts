import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import FeesForm from './FeesForm';

import {
  createLoadingSelector,
  handleAddProductFee,
  IStoreState,
  ProductAprsFeesRewardsActionTypes,
  selectAprsOptions,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductAprsFeesRewardsActionTypes.ADD_PRODUCT_FEE,
]);

const aprsLoading = createLoadingSelector([
  ProductAprsFeesRewardsActionTypes.GET_PRODUCT_FEE_APR,
]);

const formSelector = formValueSelector(formNamesConst.PRODUCT_FEES);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: loadingSelector(state),
  isAprsLoading: aprsLoading(state),
  aprsOptions: selectAprsOptions(state),
  feeApplicationConditionValue: formSelector(state, 'feeApplicationCondition'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addProductFee: handleAddProductFee,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeesForm);
