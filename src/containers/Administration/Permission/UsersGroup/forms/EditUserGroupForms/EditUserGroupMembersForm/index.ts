import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddAdminActiveUsers,
  handleGetAdminActiveUsers,
  selectActiveItemId,
  selectActiveUsersItems,
  StoreState,
} from 'store';

import { formNamesConst } from 'consts';

import EditUserGroupMembers from './EditUserGroupMembers';

const formSelector = formValueSelector(formNamesConst.EDIT_USER_GROUP_MEMBERS);

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.ADD_ADMIN_ACTIVE_USERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentUserGroupId: selectActiveItemId(state),
  activeUsersItemsOptions: selectActiveUsersItems(state),
  selectedUser: formSelector(state, 'username'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getActiveUsers: handleGetAdminActiveUsers,
    addActiveUsers: handleAddAdminActiveUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserGroupMembers);
