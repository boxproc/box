import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import EditUsersGroupModal from './EditUserGroupModal';

import { formNamesConst } from 'consts';

import { selectUsersGroupInstitutionName, selectUsersGroupName, StoreState, } from 'store';

const generalInfoFormDirty = isDirty(formNamesConst.EDIT_GENERAL_INFO_USER_GROUP);
const userGroupMembersFormDirty = isDirty(formNamesConst.EDIT_USER_GROUP_MEMBERS);
const groupPermissionFormDirty = isDirty(formNamesConst.EDIT_GROUP_PERMISSION);

const mapStateToProps = (state: StoreState) => ({
  groupName: selectUsersGroupName(state),
  institutionName: selectUsersGroupInstitutionName(state),
  isGeneralInfoFormDirty: generalInfoFormDirty(state),
  isUserGroupMembersFormDirty: userGroupMembersFormDirty(state),
  isGroupPermissionFormDirty: groupPermissionFormDirty(state),
});

export default connect(
  mapStateToProps
)(EditUsersGroupModal);
