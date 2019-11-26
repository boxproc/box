import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import DefineUsersForm from './DefineUsersForm';

import {
  handleAddAdminUser,
  handleUpdateAdminUser,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.DEFINE_USER);

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  requires2faFlagValue: formSelector(
    state,
    'requires2faFlag'
  ),
  statusValue: formSelector(
    state,
    'status'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAdminUser: handleUpdateAdminUser,
    addAdminUser: handleAddAdminUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefineUsersForm);
