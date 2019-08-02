import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
 // AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddGroupPermission,
  handleGetAdminUiItems,
  selectAdminGroupPermissionsUiItems,
  selectDefaultAdminUiItems,

  selesctUserGroupById,
  // selectUsersGroupEditorItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';
import UiItemForm from './UiItemForm';

const loadingSelector = createLoadingSelector([
    // AdminUsersGroupActionTypes.GET_ADMIN_ACTIVE_USERS,
    // AdminUsersGroupActionTypes.ADD_ADMIN_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  // activeUsersItemsOptions: selectDefaultAdminUiItems(state),
  currentGroupId: selesctUserGroupById(state),
  defaultAdminUiItems: selectDefaultAdminUiItems(state),
  uiItemsOption: selectAdminGroupPermissionsUiItems(state),
 // adminUsersGroupItems: selectUsersGroupEditorItems(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUiItems: handleGetAdminUiItems,
    addAdminGroupPermission: handleAddGroupPermission,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiItemForm);
