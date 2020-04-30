import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  activeItemIdSelector,
  handleDeleteUsersGroupPermission,
  handleGetUsersGroupPermissions,
  handleUpdateUsersGroupPermission,
  isLoadingUsersGroupPermissionsSelector,
  IStoreState,
  usersGroupPermissionsSelector,
} from 'store';

import UsersGroupPermissions from './UsersGroupPermissions';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isLoadingUsersGroupPermissionsSelector(state),
  memberId: activeItemIdSelector(state),
  groupPermissions: usersGroupPermissionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getGroupPermission: handleGetUsersGroupPermissions,
    deleteGroupPermission: handleDeleteUsersGroupPermission,
    updateUsersGroupPermission: handleUpdateUsersGroupPermission,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersGroupPermissions);
