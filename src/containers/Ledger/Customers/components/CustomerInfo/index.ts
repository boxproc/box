import { connect } from 'react-redux';

import CustomerInfo from './CustomerInfo';

import {
  isCountriesLoadingSelector,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isCountryCodesLoading: isCountriesLoadingSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(CustomerInfo);
