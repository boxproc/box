import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ChangeProfileModal from './ChangeProfileModal';

import {
  AuthActionTypes,
  createLoadingSelector,
  handleChangeAdminProfile,
  handleGetUsernames,
  isLoadingUsernamesSelector,
  StoreState,
  usernamesOptionsSelector,
} from 'store';

const changingProfile = createLoadingSelector([
  AuthActionTypes.CHANGE_ADMIN_PROFILE,
]);

const mapStateToProps = (state: StoreState) => ({
  isChangingProfile: changingProfile(state),
  isLoadingUsers: isLoadingUsernamesSelector(state),
  usernamesOptions: usernamesOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUsernames: handleGetUsernames,
    changeAdminProfile: handleChangeAdminProfile,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeProfileModal);
