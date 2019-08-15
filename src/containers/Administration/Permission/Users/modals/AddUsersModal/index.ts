import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  closeModal,
  handleAddAdminUser,
} from 'store/domains';
import AddUserModal from './AddUserModal';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    addAdminUser: handleAddAdminUser,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(AddUserModal);
