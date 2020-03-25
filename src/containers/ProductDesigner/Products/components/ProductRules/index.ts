import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ProductRules from './ProductRules';

import {
  createLoadingSelector,
  DictionaryActionTypes,
  handleFilterDictionaryEventDataElemsById,
  handleGetDictionaryEvents,
  handleGetDictionaryTransactionTypes,
  handleGetProductAprsFeesRewards,
  selectDictionaryEventsOptions,
  selectEventDataElemsForRules,
  selectProductAprsForRules,
  selectProductFeesForRules,
  selectProductRewardsForRules,
  selectTransTypesForRules,
  StoreState,
} from 'store';

const loadingEventsSelector = createLoadingSelector([
  DictionaryActionTypes.GET_DICTIONARY_EVENTS,
]);

const formSelector = formValueSelector(formNamesConst.PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  eventDataElemsItems: selectEventDataElemsForRules(state),
  productAprsItems: selectProductAprsForRules(state),
  productFeesItems: selectProductFeesForRules(state),
  productRewardsItems: selectProductRewardsForRules(state),
  transactionTypesItems: selectTransTypesForRules(state),
  isEventsLoading: loadingEventsSelector(state),
  eventsOptions: selectDictionaryEventsOptions(state),
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
