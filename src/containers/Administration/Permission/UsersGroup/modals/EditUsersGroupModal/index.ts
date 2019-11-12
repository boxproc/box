import { connect } from 'react-redux';

import EditUsersGroupModal from './EditUserGroupModal';

import { selectUsersGroupInstitutionName, selectUsersGroupName } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  groupName: selectUsersGroupName(state),
  institutionName: selectUsersGroupInstitutionName(state),
});

export default connect(
  mapStateToProps
)(EditUsersGroupModal);
