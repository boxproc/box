import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CurrencyRatesFilter from './CurrencyRatesFilter';

import {
  currencyNumsOptionsSelector,
  handleGetDictionaryCurrencies,
  isCurrenciesLoadingSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoadingCurrencies: isCurrenciesLoadingSelector(state),
  currenciesOptions: currencyNumsOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getCurrencies: handleGetDictionaryCurrencies,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyRatesFilter);
