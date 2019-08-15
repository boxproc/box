import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddAdminUsersGroup,
} from 'store/domains';
import { StoreState } from 'store/StoreState';
import AddUserGroupForm from './AddUserGroupForm';

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
