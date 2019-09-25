import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Countries from './Countries';

import {
  AdminCountriesActionTypes,
  createLoadingSelector,
  handleGetAdminCountries,
  selectAdminCountries,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminCountriesActionTypes.GET_ADMIN_COUNTRIES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminCountries: selectAdminCountries(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminCountries: handleGetAdminCountries,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
