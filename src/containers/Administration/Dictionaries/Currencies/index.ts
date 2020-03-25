import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Currencies from './Currencies';

import {
  handleGetDictionaryCurrencies,
  selectDictionaryCurrencies,
  selectIsCurrenciesLoading,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currenciesData: selectDictionaryCurrencies(state),
  isLoading: selectIsCurrenciesLoading(state),
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
