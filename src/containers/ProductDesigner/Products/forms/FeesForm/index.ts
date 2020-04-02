import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import FeesForm from './FeesForm';

import {
  feeAprsOptionsSelector,
  handleAddProductFee,
  isProductFeeAprsLoadingSelector,
  isProductFeesAddingSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_FEES);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductFeesAddingSelector(state),
  isAprsLoading: isProductFeeAprsLoadingSelector(state),
  aprsOptions: feeAprsOptionsSelector(state),
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
