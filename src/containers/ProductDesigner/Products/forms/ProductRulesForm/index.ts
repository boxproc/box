import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector, isDirty } from 'redux-form';

import ProductRulesForm from './ProductRulesForm';

import { formNames } from 'consts';

import {
  createLoadingSelector,
  handleGetProductRules,
  handleGetRuleByActionType,
  handleGetRuleByEvent,
  handleUpdateProductRules,
  ProductsActionTypes,
  selectCurrentProductRules,
  selectProductRules,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_RULES,
  ProductsActionTypes.UPDATE_PRODUCT_RULES,
]);

const formValues = formValueSelector(formNames.PRODUCT_RULES);

const dirty = isDirty(formNames.PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isDirty: dirty(state),
  productRules: selectProductRules(state),
  initialValues: selectCurrentProductRules(state),
  eventValue: formValues(
    state,
    'eventId'
  ),
  actionTypeValue: formValues(
    state,
    'actionType'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductRules: handleGetProductRules,
    updateProductRules: handleUpdateProductRules,
    getRuleByEvent: handleGetRuleByEvent,
    getRuleByActionType: handleGetRuleByActionType,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRulesForm);
