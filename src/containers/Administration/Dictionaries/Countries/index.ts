import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Countries from './Countries';

import {
  createLoadingSelector,
  DictionaryCountriesActionTypes,
  handleGetDictionaryCountries,
  selectDictionaryCountries,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

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
