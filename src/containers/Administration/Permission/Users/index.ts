import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Users from './Users';

import {
  AdminUserActionTypes,
  AuditUserActivityActionType,
  createLoadingSelector,
  handleFilterByIdAuditUserActivity,
  handleFilterUsers,
  resetUsers,
  selectActiveItemId,
  selectUserEditorItems,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminUserActionTypes.ADD_ADMIN_USER,
  AdminUserActionTypes.UPDATE_ADMIN_USER,
  AdminUserActionTypes.FILTER_USERS,
  AuditUserActivityActionType.FILTER_AUDIT_USER_ACTIVITY_BY_ID,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminUserItems: selectUserEditorItems(state),
  currentUserId: selectActiveItemId(state),
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
