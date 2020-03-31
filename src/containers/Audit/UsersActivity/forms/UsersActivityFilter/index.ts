import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import UsersActivityFilter from './UsersActivityFilter';

import {
  handleGetUsersActivityUsers,
  IStoreState,
  isUsersActivityUsersLoadingSelector,
  usersActivityUsersSelector,
} from 'store';

const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: IStoreState) => ({
  isLoadingUsers: isUsersActivityUsersLoadingSelector(state),
  usersOptions: usersActivityUsersSelector(state),
  currentInstitution: formSelector(state, 'institutionId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUsers: handleGetUsersActivityUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersActivityFilter);
