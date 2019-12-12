import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ProductRules from './ProductRules';

import {
  handleFilterDictionaryEventDataElemsById,
  handleGetProductAprsFeesRewards,
  selectActionTypesOptions,
  selectEventDataElemsForRules,
  selectProductAprsForRules,
  selectProductFeesForRules,
  selectProductRewardsForRules,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  eventDataElemsItems: selectEventDataElemsForRules(state),
  productAprsItems: selectProductAprsForRules(state),
  productFeesItems: selectProductFeesForRules(state),
  productRewardsItems: selectProductRewardsForRules(state),
  actionTypesOptions: selectActionTypesOptions(state),
  scriptValue: formSelector(
    state,
    'script'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterDictionaryEventDataElemsById: handleFilterDictionaryEventDataElemsById,
    getProductAprsFeesRewards: handleGetProductAprsFeesRewards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRules);
