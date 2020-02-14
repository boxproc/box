import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Institutions';

import {
  AdminInstitutionsActionTypes,
  createLoadingSelector,
  handleDeleteAdminInstitution,
  handleGetAdminInstitutions,
  resetInstitutions,
  selectActiveItemId,
  selectAdminCurrentInstitutionName,
  selectAdminInstitutions,
  selectIsReadOnly,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminInstitutionsActionTypes.GET_ADMIN_INSTITUTIONS,
  AdminInstitutionsActionTypes.DELETE_ADMIN_INSTITUTION,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsData: selectAdminInstitutions(state),
  currentInstitutionName: selectAdminCurrentInstitutionName(state),
  currentInstitutionId: selectActiveItemId(state),
  isReadOnly: selectIsReadOnly(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstitutions: handleGetAdminInstitutions,
    deleteInstitution: handleDeleteAdminInstitution,
    resetInstitutions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
