import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import ProductRulesForm from './ProductRulesForm';

import { formNamesConst } from 'consts';

import {
  createLoadingSelector,
  handleGetProductRule,
  handleUpdateProductRules,
  IStoreState,
  ProductRulesActionTypes,
  selectActionTypesOptions,
  selectCurrentProductRule,
  selectCurrentProductScript,
  selectCurrentProductType,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductRulesActionTypes.GET_PRODUCT_RULE,
  ProductRulesActionTypes.UPDATE_PRODUCT_RULES,
]);

const formSelector = formValueSelector(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: loadingSelector(state),
  currentProductScript: selectCurrentProductScript(state),
  actionTypesOptions: selectActionTypesOptions(state),
  currentProductType: selectCurrentProductType(state),
  initialValues: {
    ...selectCurrentProductRule(state),
    ...formSelector(
      state,
      'eventId',
      'actionType'
    ),
  },
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
