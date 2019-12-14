import { connect } from 'react-redux';

import CustomerInfo from './CustomerInfo';

import {
  createLoadingSelector,
  DictionaryCountriesActionTypes,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

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
