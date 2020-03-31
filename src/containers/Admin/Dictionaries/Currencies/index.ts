import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Currencies from './Currencies';

import {
  dictionaryCurrenciesSelector,
  handleGetDictionaryCurrencies,
  isCurrenciesLoadingSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
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
