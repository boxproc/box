import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';
import EditUsersGroupPermissionsForm from './EditUsersGroupPermissionsForm';

import {
  activeItemIdSelector,
  handleAddUsersGroupPermission,
  handleGetUsersGroupUiItems,
  isAddingUsersGroupPermissionsSelector,
  IStoreState,
  usersGroupUiItemsSelector,
} from 'store';

const formSelector = formValueSelector(formNamesConst.ADD_USERS_GROUP_PERMISSIONS);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingUsersGroupPermissionsSelector(state),
  currentUsersGroupId: activeItemIdSelector(state),
  uiItemsOptions: usersGroupUiItemsSelector(state),
  selectedUiItem: formSelector(state, 'uiItems'),
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
