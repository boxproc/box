import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddAdminActiveUsers,
  handleGetAdminActiveUsers,
  openModal,
  selectActiveUsersItems,
  selesctUserGroupById,
  // selectUsersGroupEditorItems,
} from 'store/domains';

import { formNames } from 'consts';
import { formValueSelector } from 'redux-form';
import { StoreState } from 'store/StoreState';
import ActiveUsersForm from './ActiveUsersForm';

const formSelector = formValueSelector(formNames.ADD_ACTIVE_USERS);

const loadingSelector = createLoadingSelector([
    AdminUsersGroupActionTypes.GET_ADMIN_ACTIVE_USERS,
    // AdminUsersGroupActionTypes.ADD_ADMIN_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  activeUsersItemsOptions: selectActiveUsersItems(state),
  currentGroupId: selesctUserGroupById(state),
 // adminUsersGroupItems: selectUsersGroupEditorItems(state)
 selectedUser: formSelector(
   state,
   'username'
 ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
    getActiveUsers: handleGetAdminActiveUsers,
    addAdminActiveUsers: handleAddAdminActiveUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveUsersForm);
