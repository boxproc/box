import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import EditUsersGroupModal from './EditUsersGroupModal';

import { formNamesConst } from 'consts';

import {
  currentUsersGroupInstNameSelector,
  currentUsersGroupNameSelector,
  IStoreState,
} from 'store';

const generalInfoFormDirty = isDirty(formNamesConst.EDIT_USERS_GROUP);
const userGroupMembersFormDirty = isDirty(formNamesConst.EDIT_USERS_GROUP_MEMBERS);
const groupPermissionFormDirty = isDirty(formNamesConst.EDIT_USERS_GROUP_PERMISSIONS);

const mapStateToProps = (state: IStoreState) => ({
  groupName: currentUsersGroupNameSelector(state),
  institutionName: currentUsersGroupInstNameSelector(state),
  isGeneralInfoFormDirty: generalInfoFormDirty(state),
  isUsersGroupMembersFormDirty: userGroupMembersFormDirty(state),
  isGroupPermissionFormDirty: groupPermissionFormDirty(state),
});

export default connect(
  mapStateToProps
)(EditUsersGroupModal);
