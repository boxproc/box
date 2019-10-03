import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Institutions';

import {
  AdminInstitutionsActionTypes,
  createLoadingSelector,
  handleDeleteAdminInstitution,
  handleGetAdminInstitutions,
  resetInstitutions,
  selectAdminCurrentInstitutionName,
  selectAdminInstitutions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminInstitutionsActionTypes.GET_ADMIN_INSTITUTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminInstitutions: selectAdminInstitutions(state),
  adminCurrentInstitutionName: selectAdminCurrentInstitutionName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminInstitutions: handleGetAdminInstitutions,
    deleteAdminInstitution: handleDeleteAdminInstitution,
    resetInstitutions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
