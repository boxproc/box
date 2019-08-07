import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import EditGroupPermissionForm from './EditGroupPermissionForm';

import {
  createLoadingSelector,
  handleAddGroupPermission,
  handleGetAdminUiItems,
  selectAdminGroupPermissionsUiItems,
  selectDefaultAdminUiItems,
  selectUserGroupById,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const formSelector = formValueSelector(formNames.EDIT_GROUP_PERMISSION);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentGroupId: selectUserGroupById(state),
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
