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
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_RULE,
  ProductsActionTypes.UPDATE_PRODUCT_RULES,
]);

const formValues = formValueSelector(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  rulesValues: formValues(
    state,
    'eventId',
    'actionType'
  ),
  initialValues: {
    ...selectCurrentProductRule(state),
    ...formValues(
      state,
      'eventId',
      'actionType'
    ),
  },
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
