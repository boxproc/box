import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddUserModal from './AddUserModal';

import {
  closeModal,
  handleAddAdminUser,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.DEFINE_ADMIN_USER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    addAdminUser: handleAddAdminUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserModal);
