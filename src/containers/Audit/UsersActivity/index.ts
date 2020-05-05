import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UsersActivity from './UsersActivity';

import {
  handleFilterUsersActivity,
  IStoreState,
  isUsersActivityLoadingSelector,
  resetUsersActivity,
  userInstitutionsOptionsSelector,
  usersActivitySelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isUsersActivityLoadingSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  usersActivity: usersActivitySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterUsersActivity: handleFilterUsersActivity,
    resetUsersActivity,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersActivity);
