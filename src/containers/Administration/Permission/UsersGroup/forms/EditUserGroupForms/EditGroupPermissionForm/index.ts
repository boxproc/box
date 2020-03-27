import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import EditGroupPermissionForm from './EditGroupPermissionForm';

import {
  activeItemIdSelector,
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddGroupPermission,
  handleGetUsersGroupUiItems,
  selectAdminGroupPermissionsUiItems,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.ADD_USERS_GROUP_PERMISSIONS,
]);

const formSelector = formValueSelector(formNamesConst.EDIT_GROUP_PERMISSION);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentUserGroupId: activeItemIdSelector(state),
  uiItemsOptions: selectAdminGroupPermissionsUiItems(state),
  selectedUiItem: formSelector(state, 'uiItems'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUiItems: handleGetUsersGroupUiItems,
    addGroupPermission: handleAddGroupPermission,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGroupPermissionForm);
