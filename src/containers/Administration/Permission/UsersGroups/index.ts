import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UsersGroups from './UsersGroups';

import {
  handleGetUsersGroups,
  isAddingUsersGroupSelector,
  isLoadingUsersGroupsSelector,
  isUpdatingUsersGroupSelector,
  resetUsersGroups,
  StoreState,
  usersGroupsSelector,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isAddingUsersGroupSelector(state)
    || isUpdatingUsersGroupSelector(state)
    || isLoadingUsersGroupsSelector(state),
  usersGroups: usersGroupsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUsersGroups: handleGetUsersGroups,
    resetUsersGroups,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersGroups);
