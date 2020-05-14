import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import ProductGeneralInfo from './ProductGeneralInfo';

import { formNamesConst } from 'consts';

import {
  currenciesOptionsSelector,
  handleGetConvertibleInstCurrencies,
  handleGetDictionaryCurrencies,
  handleGetDictionaryStatementCycleTypes,
  isCurrenciesLoadingSelector,
  isStatementCycleTypesLoading,
  IStoreState,
  statementCycleTypesOptionsSelector,
  userInstitutionsOptionsSelector,
} from 'store';

const formSelectorGeneralProduct = formValueSelector(formNamesConst.GENERAL_PRODUCT);
const formSelectorAddProduct = formValueSelector(formNamesConst.ADD_PRODUCT);

const mapStateToProps = (state: IStoreState) => ({
  isCurrenciesLoading: isCurrenciesLoadingSelector(state),
  isStatementCycleTypesLoading: isStatementCycleTypesLoading(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  statementCycleTypesOptions: statementCycleTypesOptionsSelector(state),
  currenciesOptions: currenciesOptionsSelector(state),
  statementCycleTypeValue: formSelectorGeneralProduct(state, 'statementCycleTypeId')
    || formSelectorAddProduct(state, 'statementCycleTypeId'),
  institutionValue: formSelectorGeneralProduct(state, 'institutionId')
    || formSelectorAddProduct(state, 'institutionId'),
  enabledForCustomerLimitValue: formSelectorGeneralProduct(state, 'enabledForCustomerLimit')
    || formSelectorAddProduct(state, 'enabledForCustomerLimit'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getStatementCycleTypes: handleGetDictionaryStatementCycleTypes,
    getConvertibleInstCurrencies: handleGetConvertibleInstCurrencies,
    getDictionaryCurrencies: handleGetDictionaryCurrencies,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGeneralInfo);
