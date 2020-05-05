import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Users from './Users';

import {
  activeItemIdSelector,
  handleFilterByIdUsersActivity,
  handleFilterUsers,
  isAddingUserSelector,
  isFilteringUsersSelector,
  IStoreState,
  isUpdatingUserSelector,
  resetUsers,
  userInstitutionsOptionsSelector,
  usersSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentUserId: activeItemIdSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  users: usersSelector(state),
  isLoading: isAddingUserSelector(state)
    || isUpdatingUserSelector(state)
    || isFilteringUsersSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterUsers: handleFilterUsers,
    filterUsersById: handleFilterByIdUsersActivity,
    resetUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
