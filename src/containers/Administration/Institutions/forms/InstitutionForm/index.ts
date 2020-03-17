import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InstitutionForm from './InstitutionForm';

import {
  AdminInstitutionsActionTypes,
  createLoadingSelector,
  handleAddAdminInstitution,
  handleDeleteAdminInstitution,
  handleUpdateAdminInstitution,
  selectActiveItemId,
  selectAdminCurrentInstitutionName,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminInstitutionsActionTypes.UPDATE_ADMIN_INSTITUTION,
  AdminInstitutionsActionTypes.ADD_ADMIN_INSTITUTION,
  AdminInstitutionsActionTypes.DELETE_ADMIN_INSTITUTION,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentInstitutionName: selectAdminCurrentInstitutionName(state),
  currentInstitutionId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateInstitution: handleUpdateAdminInstitution,
    addInstitution: handleAddAdminInstitution,
    deleteInstitution: handleDeleteAdminInstitution,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstitutionForm);
