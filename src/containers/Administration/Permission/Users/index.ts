import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import User from './User';

import {
  AdminUserActionTypes,
  createLoadingSelector,
  handleFilterUsers,
  handleSetAdminUserId,
  selectUserEditorItems,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminUserActionTypes.GET_ADMIN_USER,
  AdminUserActionTypes.ADD_ADMIN_USER,
  AdminUserActionTypes.UPDATE_ADMIN_USER,
  AdminUserActionTypes.FILTER_USERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminUserItems: selectUserEditorItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterUsers: handleFilterUsers,
    setAdminUserId: handleSetAdminUserId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
