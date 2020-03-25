import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import ProductGeneralInfo from './ProductGeneralInfo';

import { formNamesConst } from 'consts';

import {
  createLoadingSelector,
  DictionaryActionTypes,
  handleGetDictionaryCurrencies,
  handleGetDictionaryStatementCycleTypes,
  selectCurrenciesOptions,
  selectInstitutionsOptions,
  selectStatementCycleTypesOptions,
  StoreState,
} from 'store';

const currencyCodesLoading = createLoadingSelector([
  DictionaryActionTypes.GET_DICTIONARY_CURRENCIES,
]);

const statementCycleTypesLoading = createLoadingSelector([
  DictionaryActionTypes.GET_DICTIONARY_STATEMENT_CYCLE_TYPES,
]);

const formSelectorGeneralProduct = formValueSelector(formNamesConst.GENERAL_PRODUCT);
const formSelectorAddProduct = formValueSelector(formNamesConst.ADD_PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  isCurrenciesLoading: currencyCodesLoading(state),
  isStatementCycleTypesLoading: statementCycleTypesLoading(state),
  institutionsOptions: selectInstitutionsOptions(state),
  statementCycleTypesOptions: selectStatementCycleTypesOptions(state),
  currenciesOptions: selectCurrenciesOptions(state),
  statementCycleTypeValue: formSelectorGeneralProduct(state, 'statementCycleTypeId')
    || formSelectorAddProduct(state, 'statementCycleTypeId'),
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
