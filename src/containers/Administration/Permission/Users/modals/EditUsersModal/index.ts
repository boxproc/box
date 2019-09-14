import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector, isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditUserModal from './EditUserModal';

import {
  closeModal,
  handleUpdateAdminUser,
  selectUsersValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.DEFINE_ADMIN_USER);
const formSelector = formValueSelector(formNamesConst.DEFINE_ADMIN_USER);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
  selectUserItems: selectUsersValues(state),
  requires2faFlagValue: formSelector(
    state,
    'requires2faFlag'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAdminUser: handleUpdateAdminUser,
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserModal);
