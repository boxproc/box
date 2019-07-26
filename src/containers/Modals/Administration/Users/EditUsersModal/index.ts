import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditUserModal from './EditUserModal';

import {
  closeModal,
  handleUpdateAdminUser,
  selectUsersValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({

 selectUserItems : selectUsersValues(state),
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
