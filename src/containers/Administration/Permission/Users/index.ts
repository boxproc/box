import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Users from './Users';

import {
  activeItemIdSelector,
  AdminUserActionTypes,
  AuditUserActivityActionType,
  createLoadingSelector,
  handleFilterByIdAuditUserActivity,
  handleFilterUsers,
  resetUsers,
  selectInstitutionsOptions,
  selectUserEditorItems,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminUserActionTypes.ADD_ADMIN_USER,
  AdminUserActionTypes.UPDATE_ADMIN_USER,
  AdminUserActionTypes.FILTER_USERS,
  AuditUserActivityActionType.FILTER_AUDIT_USER_ACTIVITY_BY_ID,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  userItems: selectUserEditorItems(state),
  currentUserId: activeItemIdSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
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
