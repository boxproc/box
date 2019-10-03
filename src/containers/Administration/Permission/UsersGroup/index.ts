import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UsersGroup from './UsersGroup';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleGetAdminUsersGroup,
  resetUsersGroup,
  selectUsersGroupEditorItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.GET_ADMIN_USERS_GROUP,
  AdminUsersGroupActionTypes.ADD_ADMIN_USERS_GROUP,
  AdminUsersGroupActionTypes.UPDATE_ADMIN_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminUsersGroupItems: selectUsersGroupEditorItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminUsersGroup: handleGetAdminUsersGroup,
    resetUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersGroup);
