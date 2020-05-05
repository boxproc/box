import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import CurrencyRateForm from './CurrencyRateForm';

import { formNamesConst } from 'consts';

import {
  currenciesOptionsSelector,
  handleAddCurrencyRate,
  isCurrenciesLoadingSelector,
  isLoadingAddingRatesSelector,
  IStoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const formSelector = formValueSelector(formNamesConst.CURRENCY_RATES);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isLoadingAddingRatesSelector(state),
  institutionOptions: userInstitutionsOptionsSelector(state),
  isLoadingCurrencies: isCurrenciesLoadingSelector(state),
  currenciesOptions: currenciesOptionsSelector(state),
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
