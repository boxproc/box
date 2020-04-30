import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import CurrencyRateForm from './CurrencyRateForm';

import { formNamesConst } from 'consts';

import {
  currencyNumsOptionsSelector,
  handleAddCurrencyRate,
  isCurrenciesLoadingSelector,
  IStoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const formSelector = formValueSelector(formNamesConst.CURRENCY_RATES);

const mapStateToProps = (state: IStoreState) => ({
  institutionOptions: userInstitutionsOptionsSelector(state),
  isLoadingCurrencies: isCurrenciesLoadingSelector(state),
  currenciesOptions: currencyNumsOptionsSelector(state),
  providerValue: formSelector(state, 'rateProvider'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addCurrencyRate: handleAddCurrencyRate,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyRateForm);
