import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddUserGroupForm from './AddUserGroupForm';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddAdminUsersGroup,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.ADD_ADMIN_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addAdminUsersGroup: handleAddAdminUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserGroupForm);
