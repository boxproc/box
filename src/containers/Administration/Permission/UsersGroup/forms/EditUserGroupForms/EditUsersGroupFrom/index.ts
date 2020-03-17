import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditUsersGroupFrom from './EditUsersGroupFrom';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleUpdateAdminUsersGroup,
  selectUsersGroupValues,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.UPDATE_ADMIN_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectUsersGroupValues(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateUsersGroup: handleUpdateAdminUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUsersGroupFrom);
