import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductGeneralInfo from './ProductGeneralInfo';

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

const mapStateToProps = (state: IStoreState) => ({
  isCurrenciesLoading: isCurrenciesLoadingSelector(state),
  isStatementCycleTypesLoading: isStatementCycleTypesLoading(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  statementCycleTypesOptions: statementCycleTypesOptionsSelector(state),
  currenciesOptions: currenciesOptionsSelector(state),
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
