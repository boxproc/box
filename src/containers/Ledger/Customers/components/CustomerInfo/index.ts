import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CustomerInfo from './CustomerInfo';

import {
  createLoadingSelector,
  DictionaryCountriesActionTypes,
  handleGetDictionaryCountries,
  selectCountryCodesOptions,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  DictionaryCountriesActionTypes.GET_DICTIONARY_COUNTRIES,
]);

const mapStateToProps = (state: StoreState) => ({
  isCountryCodesLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  countryCodes: selectCountryCodesOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    loadCountryCodes: handleGetDictionaryCountries,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerInfo);
