import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ChangeProfileModal from './ChangeProfileModal';

import { StoreState } from 'store/StoreState';

import {
  AdminUserActionTypes,
  AuthActionTypes,
  createLoadingSelector,
  handleChangeAdminProfile,
  handleGetAccessUsers,
  selectAdminAccessUsersOptions,
} from 'store/domains';

const changingProfile = createLoadingSelector([
  AuthActionTypes.CHANGE_ADMIN_PROFILE,
]);

const loadingUsers = createLoadingSelector([
  AdminUserActionTypes.GET_ADMIN_ACCESS_USERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isChangingProfile: changingProfile(state),
  isLoadingUsers: loadingUsers(state),
  adminAccessUsersOptions: selectAdminAccessUsersOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAccessUsers: handleGetAccessUsers,
    changeAdminProfile: handleChangeAdminProfile,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeProfileModal);
