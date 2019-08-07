import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductRulesForm from './ProductRulesForm';

import {
  createLoadingSelector,
  handleGetProductRules,
  handleUpdateProductRules,
  ProductsActionTypes,
  selectCurrentProductRules,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_RULES,
  ProductsActionTypes.UPDATE_PRODUCT_RULES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectCurrentProductRules(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductRules: handleGetProductRules,
    updateProductRules: handleUpdateProductRules,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRulesForm);
