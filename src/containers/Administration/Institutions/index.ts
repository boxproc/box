import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Institutions';

import {
  AdminInstitutionsActionTypes,
  createLoadingSelector,
  handleGetAdminInstitutions,
  handleSetAdminInstitutionId,
  openModal,
  selectAdminInstitutions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminInstitutionsActionTypes.GET_ADMIN_INSTITUTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminInstitutions: selectAdminInstitutions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
    getAdminInstitutions: handleGetAdminInstitutions,
    setAdminInstitutionId: handleSetAdminInstitutionId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
