import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import ProductRulesForm from './ProductRulesForm';

import { formNamesConst } from 'consts';

import {
  actionTypesOptionsSelector,
  currentProductRuleSelector,
  currentProductScriptSelector,
  handleGetProductRule,
  handleUpdateProductRule,
  isProductRuleLoadingSelector,
  IStoreState,
  selectCurrentProductType,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductRuleLoadingSelector(state),
  currentProductScript: currentProductScriptSelector(state),
  actionTypesOptions: actionTypesOptionsSelector(state),
  currentProductType: selectCurrentProductType(state),
  initialValues: {
    ...currentProductRuleSelector(state),
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
    updateProductRule: handleUpdateProductRule,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRulesForm);
