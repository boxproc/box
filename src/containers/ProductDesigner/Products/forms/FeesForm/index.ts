import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import FeesForm from './FeesForm';

import {
  createLoadingSelector,
  handleAddProductFee,
  ProductsActionTypes,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.ADD_PRODUCT_FEE,
]);
const formSelector = formValueSelector(formNamesConst.PRODUCT_FEES);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  feeApplicationConditionValue: formSelector(
    state,
    'feeApplicationCondition'
  ),
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
