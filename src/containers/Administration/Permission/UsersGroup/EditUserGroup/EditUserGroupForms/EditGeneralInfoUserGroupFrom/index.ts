import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditGeneralInfoUserGroupFrom from './EditGeneralInfoUserGroupFrom';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleUpdateAdminUsersGroup,
  selectUsersGroupValues,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.UPDATE_ADMIN_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectUsersGroupValues(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAdminUsersGroup: handleUpdateAdminUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGeneralInfoUserGroupFrom);
