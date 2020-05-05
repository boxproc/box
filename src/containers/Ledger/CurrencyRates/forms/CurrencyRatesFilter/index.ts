import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CurrencyRatesFilter from './CurrencyRatesFilter';

import {
  currenciesOptionsSelector,
  handleGetDictionaryCurrencies,
  isCurrenciesLoadingSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoadingCurrencies: isCurrenciesLoadingSelector(state),
  currenciesOptions: currenciesOptionsSelector(state),
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
