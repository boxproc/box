import { connect } from 'react-redux';

import CustomerInfo from './CustomerInfo';

import {
  createLoadingSelector,
  DictionaryCountriesActionTypes,
  selectInstitutionsOptions,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  DictionaryCountriesActionTypes.GET_DICTIONARY_COUNTRIES,
]);

const mapStateToProps = (state: StoreState) => ({
  isCountryCodesLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(CustomerInfo);
