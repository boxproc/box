import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Currencies from './Currencies';

import {
  dictionaryCurrenciesSelector,
  handleGetDictionaryCurrencies,
  isCurrenciesLoadingSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currenciesData: dictionaryCurrenciesSelector(state),
  isLoading: isCurrenciesLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getCurrenciesData: handleGetDictionaryCurrencies,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);
