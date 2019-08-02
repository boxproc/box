import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  createLoadingSelector,
  handleAddGroupPermission,
  handleGetAdminUiItems,
  selectAdminGroupPermissionsUiItems,
  selectDefaultAdminUiItems,
  selectUserGroupById,
} from 'store/domains';

import { StoreState } from 'store/StoreState';
import EditGroupPermissionForm from './EditGroupPermissionForm';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentGroupId: selectUserGroupById(state),
  defaultAdminUiItems: selectDefaultAdminUiItems(state),
  uiItemsOptions: selectAdminGroupPermissionsUiItems(state),
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
