import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import EditGroupPermissionForm from './EditGroupPermissionForm';

import {
  handleAddGroupPermission,
  handleGetAdminUiItems,
  selectActiveItemId,
  selectAdminGroupPermissionsUiItems,
  selectDefaultAdminUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.EDIT_GROUP_PERMISSION);

const mapStateToProps = (state: StoreState) => ({
  currentGroupId: selectActiveItemId(state),
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
