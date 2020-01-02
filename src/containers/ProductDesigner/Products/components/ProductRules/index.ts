import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ProductRules from './ProductRules';

import {
  createLoadingSelector,
  DictionaryEventsActionTypes,
  handleFilterDictionaryEventDataElemsById,
  handleGetDictionaryEvents,
  handleGetDictionaryTransactionTypes,
  handleGetProductAprsFeesRewards,
  selectDictionaryEventsOptions,
  selectEventDataElemsForRules,
  selectProductAprsForRules,
  selectProductFeesForRules,
  selectProductRewardsForRules,
  selectTransactionTypesForRules,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingEventsSelector = createLoadingSelector([
  DictionaryEventsActionTypes.GET_DICTIONARY_EVENTS,
]);

const formSelector = formValueSelector(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  eventDataElemsItems: selectEventDataElemsForRules(state),
  productAprsItems: selectProductAprsForRules(state),
  productFeesItems: selectProductFeesForRules(state),
  productRewardsItems: selectProductRewardsForRules(state),
  transactionTypesItems: selectTransactionTypesForRules(state),
  isEventsLoading: loadingEventsSelector(state),
  eventsOptions: selectDictionaryEventsOptions(state),
  scriptValue: formSelector(
    state,
    'script'
  ),
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
