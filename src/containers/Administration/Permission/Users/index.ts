import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import User from './User';

import {
  AdminUserActionTypes,
  createLoadingSelector,
  handleFilterUsers,
  handleGetAdminUser,
  openModal,
  selectDefaultFilterUsers,
  selectUserEditorItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminUserActionTypes.GET_ADMIN_USER,
  AdminUserActionTypes.ADD_ADMIN_USER,
  AdminUserActionTypes.UPDATE_ADMIN_USER,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminUserItems: selectUserEditorItems(state),
  DefaultFilterUsers: selectDefaultFilterUsers(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
    getAdminUser: handleGetAdminUser,
    filterUsers: handleFilterUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
