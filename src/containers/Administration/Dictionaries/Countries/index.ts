import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Countries from './Countries';

import {
  handleGetDictionaryCountries,
  selectDictionaryCountries,
  selectIsCountriesLoading,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  countriesData: selectDictionaryCountries(state),
  isLoading: selectIsCountriesLoading(state),
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
