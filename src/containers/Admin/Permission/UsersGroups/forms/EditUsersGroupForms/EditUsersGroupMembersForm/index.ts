import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  activeItemIdSelector,
  handleAddUsersGroupMember,
  handleGetUsersGroupUsers,
  isAddingUsersGroupMember,
  IStoreState,
  usersGroupUsersSelector,
} from 'store';

import EditUsersGroupMembersForm from './EditUsersGroupMembersForm';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingUsersGroupMember(state),
  currentUsersGroupId: activeItemIdSelector(state),
  activeUsersItemsOptions: usersGroupUsersSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUsersGroupUsers: handleGetUsersGroupUsers,
    addUsersGroupMember: handleAddUsersGroupMember,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUsersGroupMembersForm);
