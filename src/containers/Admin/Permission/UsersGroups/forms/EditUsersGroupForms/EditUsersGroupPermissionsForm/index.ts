import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditUsersGroupPermissionsForm from './EditUsersGroupPermissionsForm';

import {
  activeItemIdSelector,
  handleAddUsersGroupPermission,
  handleGetUsersGroupUiItems,
  isAddingUsersGroupPermissionsSelector,
  IStoreState,
  usersGroupUiItemsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingUsersGroupPermissionsSelector(state),
  currentUsersGroupId: activeItemIdSelector(state),
  uiItemsOptions: usersGroupUiItemsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUiItems: handleGetUsersGroupUiItems,
    addGroupPermission: handleAddUsersGroupPermission,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUsersGroupPermissionsForm);
