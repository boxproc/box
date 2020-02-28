import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import EditGroupPermissionForm from './EditGroupPermissionForm';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddGroupPermission,
  handleGetAdminUiItems,
  selectActiveItemId,
  selectAdminGroupPermissionsUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.ADD_ADMIN_GROUP_PERMISSIONS,
]);

const formSelector = formValueSelector(formNamesConst.EDIT_GROUP_PERMISSION);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentUserGroupId: selectActiveItemId(state),
  uiItemsOptions: selectAdminGroupPermissionsUiItems(state),
  selectedUiItem: formSelector(state, 'uiItems'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUiItems: handleGetAdminUiItems,
    addGroupPermission: handleAddGroupPermission,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGroupPermissionForm);
