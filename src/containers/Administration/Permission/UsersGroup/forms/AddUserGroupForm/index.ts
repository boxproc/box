import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddUserGroupForm from './AddUserGroupForm';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleAddUsersGroup,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.ADD_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addUsersGroup: handleAddUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserGroupForm);
