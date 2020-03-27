import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import {
  activeItemIdSelector,
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddActiveUsers,
  handleGetActiveUsers,
  selectActiveUsersItems,
  StoreState,
} from 'store';

import { formNamesConst } from 'consts';

import EditUserGroupMembers from './EditUserGroupMembers';

const formSelector = formValueSelector(formNamesConst.EDIT_USER_GROUP_MEMBERS);

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.ADD_USERS_GROUP_MEMBER,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentUserGroupId: activeItemIdSelector(state),
  activeUsersItemsOptions: selectActiveUsersItems(state),
  selectedUser: formSelector(state, 'username'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getActiveUsers: handleGetActiveUsers,
    addActiveUsers: handleAddActiveUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserGroupMembers);
