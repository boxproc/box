import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InstitutionForm from './InstitutionForm';

import { StoreState } from 'store/StoreState';

import {
  AdminInstitutionsActionTypes,
  createLoadingSelector,
  handleAddAdminInstitution,
  handleDeleteAdminInstitution,
  handleUpdateAdminInstitution,
  selectAdminCurrentInstitutionName,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  AdminInstitutionsActionTypes.UPDATE_ADMIN_INSTITUTION,
  AdminInstitutionsActionTypes.ADD_ADMIN_INSTITUTION,
  AdminInstitutionsActionTypes.DELETE_ADMIN_INSTITUTION,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminCurrentInstitutionName: selectAdminCurrentInstitutionName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAdminInstitution: handleUpdateAdminInstitution,
    addAdminInstitution: handleAddAdminInstitution,
    deleteAdminInstitution: handleDeleteAdminInstitution,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstitutionForm);
