import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import UserForm from './UserForm';

import {
  handleAddAdminUser,
  handleUpdateAdminUser,
  selectInstitutions,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.DEFINE_USER);

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  institutions: selectInstitutions(state),
  requires2faFlagValue: formSelector(state, 'requires2faFlag'),
  statusValue: formSelector(state, 'status'),
  institutionValue: formSelector(state, 'institution'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateUser: handleUpdateAdminUser,
    addUser: handleAddAdminUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
