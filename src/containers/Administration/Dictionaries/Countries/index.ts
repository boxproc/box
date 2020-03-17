import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Countries from './Countries';

import {
  createLoadingSelector,
  DictionaryCountriesActionTypes,
  handleGetDictionaryCountries,
  selectDictionaryCountries,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  DictionaryCountriesActionTypes.GET_DICTIONARY_COUNTRIES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  dictionaryCountries: selectDictionaryCountries(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDictionaryCountries: handleGetDictionaryCountries,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
