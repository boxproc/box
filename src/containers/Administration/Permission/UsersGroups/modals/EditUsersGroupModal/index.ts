import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import EditUsersGroupModal from './EditUsersGroupModal';

import { formNamesConst } from 'consts';

import {
  currentUsersGroupInstNameSelector,
  currentUsersGroupNameSelector,
  StoreState,
} from 'store';

const generalInfoFormDirty = isDirty(formNamesConst.EDIT_GENERAL_INFO_USERS_GROUP);
const userGroupMembersFormDirty = isDirty(formNamesConst.EDIT_USERS_GROUP_MEMBERS);
const groupPermissionFormDirty = isDirty(formNamesConst.EDIT_GROUP_PERMISSION);

const mapStateToProps = (state: StoreState) => ({
  groupName: currentUsersGroupNameSelector(state),
  institutionName: currentUsersGroupInstNameSelector(state),
  isGeneralInfoFormDirty: generalInfoFormDirty(state),
  isUsersGroupMembersFormDirty: userGroupMembersFormDirty(state),
  isGroupPermissionFormDirty: groupPermissionFormDirty(state),
});

export default connect(
  mapStateToProps
)(EditUsersGroupModal);
