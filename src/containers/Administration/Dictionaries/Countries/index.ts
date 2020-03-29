import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Countries from './Countries';

import {
  dictionaryCountriesSelector,
  handleGetDictionaryCountries,
  isCountriesLoadingSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  countriesData: dictionaryCountriesSelector(state),
  isLoading: isCountriesLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getCountriesData: handleGetDictionaryCountries,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
