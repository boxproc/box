import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ProductRules from './ProductRules';

import {
  dictionaryEventsOptionsSelector,
  eventDataElemsForRulesSelector,
  handleFilterDictionaryEventDataElemsById,
  handleGetDictionaryEvents,
  handleGetDictionaryTransactionTypes,
  handleGetProductAprsFeesRewards,
  isEventsLoadingSelector,
  IStoreState,
  selectProductAprsForRules,
  selectProductFeesForRules,
  selectProductRewardsForRules,
  transTypesForRulesSelector,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: IStoreState) => ({
  eventDataElemsItems: eventDataElemsForRulesSelector(state),
  productAprsItems: selectProductAprsForRules(state),
  productFeesItems: selectProductFeesForRules(state),
  productRewardsItems: selectProductRewardsForRules(state),
  transactionTypesItems: transTypesForRulesSelector(state),
  isEventsLoading: isEventsLoadingSelector(state),
  eventsOptions: dictionaryEventsOptionsSelector(state),
  scriptValue: formSelector(state, 'script'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterDictionaryEventDataElemsById: handleFilterDictionaryEventDataElemsById,
    getProductAprsFeesRewards: handleGetProductAprsFeesRewards,
    getEvents: handleGetDictionaryEvents,
    getTransactionTypes: handleGetDictionaryTransactionTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRules);
