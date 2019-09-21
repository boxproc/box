import { connect } from 'react-redux';

import EditUsersGroupModal from './EditUserGroupModal';

import { selectUsersGroupName } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  usersGroupName: selectUsersGroupName(state),
});

export default connect(
  mapStateToProps
)(EditUsersGroupModal);
