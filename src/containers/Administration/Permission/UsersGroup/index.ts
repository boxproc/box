import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UsersGroup from './UsersGroup';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleGetUsersGroup,
  resetUsersGroup,
  selectUsersGroupEditorItems,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.GET_USERS_GROUPS,
  AdminUsersGroupActionTypes.ADD_USERS_GROUP,
  AdminUsersGroupActionTypes.UPDATE_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  usersGroupItems: selectUsersGroupEditorItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUsersGroup: handleGetUsersGroup,
    resetUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersGroup);
