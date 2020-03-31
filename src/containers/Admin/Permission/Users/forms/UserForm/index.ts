import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';
import UserForm from './UserForm';

import {
  handleAddUser,
  handleUpdateUser,
  IStoreState,
  userInstitutionsOptionsSelector,
  userInstitutionsSelector,
} from 'store';

const formSelector = formValueSelector(formNamesConst.USER);

const mapStateToProps = (state: IStoreState) => ({
  institutionsOptions: userInstitutionsOptionsSelector(state),
  institutions: userInstitutionsSelector(state),
  requires2faFlagValue: formSelector(state, 'requires2faFlag'),
  statusValue: formSelector(state, 'status'),
  institutionValue: formSelector(state, 'institution'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateUser: handleUpdateUser,
    addUser: handleAddUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
