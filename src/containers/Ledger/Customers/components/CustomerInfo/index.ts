import { connect } from 'react-redux';

import CustomerInfo from './CustomerInfo';

import {
  isCountriesLoadingSelector,
  IStoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isCountryCodesLoading: isCountriesLoadingSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(CustomerInfo);
