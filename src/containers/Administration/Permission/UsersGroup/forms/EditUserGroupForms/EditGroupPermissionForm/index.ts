import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import EditGroupPermissionForm from './EditGroupPermissionForm';

import {
  handleAddGroupPermission,
  handleGetAdminUiItems,
  selectAdminGroupPermissionsUiItems,
  selectCurrentUserGroupId,
  selectDefaultAdminUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNames.EDIT_GROUP_PERMISSION);

const mapStateToProps = (state: StoreState) => ({
  currentGroupId: selectCurrentUserGroupId(state),
  defaultAdminUiItems: selectDefaultAdminUiItems(state),
  uiItemsOptions: selectAdminGroupPermissionsUiItems(state),
  selectedUiItem: formSelector(
    state,
    'uiItem'
  ),
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
)(EditGroupPermissionForm);