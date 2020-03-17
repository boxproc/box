import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Currencies from './Currencies';

import {
  createLoadingSelector,
  DictionaryCurrenciesActionTypes,
  handleGetDictionaryCurrencies,
  selectDictionaryCurrencies,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  DictionaryCurrenciesActionTypes.GET_DICTIONARY_CURRENCIES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  dictionaryCurrencies: selectDictionaryCurrencies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDictionaryCurrencies: handleGetDictionaryCurrencies,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);
