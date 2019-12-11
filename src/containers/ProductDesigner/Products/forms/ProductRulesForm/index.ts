import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import ProductRulesForm from './ProductRulesForm';

import { formNamesConst } from 'consts';

import {
  createLoadingSelector,
  handleGetProductRule,
  handleUpdateProductRules,
  ProductsActionTypes,
  selectCurrentProductRule,
  selectCurrentProductScript,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_RULE,
  ProductsActionTypes.UPDATE_PRODUCT_RULES,
]);

const formSelector = formValueSelector(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentProductScript: selectCurrentProductScript(state),
  initialValues: selectCurrentProductRule(state),
  rulesValues: formSelector(
    state,
    'eventId',
    'actionType'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductRule: handleGetProductRule,
    updateProductRules: handleUpdateProductRules,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRulesForm);
