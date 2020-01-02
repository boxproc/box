import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductGeneralInfo from './ProductGeneralInfo';

import {
  createLoadingSelector,
  DictionaryConstsActionTypes,
  DictionaryCurrenciesActionTypes,
  handleGetDictionaryCurrencies,
  handleGetDictionaryStatementCycleTypes,
  selectDictionaryCurrencies,
  selectInstitutionsOptions,
  selectStatementCycleTypesOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const currencyCodesLoading = createLoadingSelector([
  DictionaryCurrenciesActionTypes.GET_DICTIONARY_CURRENCIES,
]);

const statementCycleTypesLoading = createLoadingSelector([
  DictionaryConstsActionTypes.GET_DICTIONARY_STATEMENT_CYCLE_TYPES,
]);

const mapStateToProps = (state: StoreState) => ({
  isCurrencyCodesLoading: currencyCodesLoading(state),
  isStatementCycleTypesLoading: statementCycleTypesLoading(state),
  institutionsOptions: selectInstitutionsOptions(state),
  statementCycleTypesOptions: selectStatementCycleTypesOptions(state),
  currencyCodesOptions: selectDictionaryCurrencies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getStatementCycleTypes: handleGetDictionaryStatementCycleTypes,
    getCurrencyCodes: handleGetDictionaryCurrencies,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGeneralInfo);
