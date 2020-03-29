import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Users from './Users';

import {
  activeItemIdSelector,
  AuditUserActivityActionType,
  createLoadingSelector,
  handleFilterByIdAuditUserActivity,
  handleFilterUsers,
  isAddingUserSelector,
  isFilteringUsersSelector,
  isUpdatingUserSelector,
  resetUsers,
  StoreState,
  userInstitutionsOptionsSelector,
  usersSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  AuditUserActivityActionType.FILTER_AUDIT_USER_ACTIVITY_BY_ID,
]);

const mapStateToProps = (state: StoreState) => ({
  currentUserId: activeItemIdSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  users: usersSelector(state),
  isLoading: loadingSelector(state)
    || isAddingUserSelector(state)
    || isUpdatingUserSelector(state)
    || isFilteringUsersSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterUsers: handleFilterUsers,
    filterUsersById: handleFilterByIdAuditUserActivity,
    resetUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
