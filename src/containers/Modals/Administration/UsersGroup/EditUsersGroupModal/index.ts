import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditUsersGroupModal from './EditUserGroupModal';

import {
  closeModal,
  handleUpdateAdminUsersGroup,
  selectUsersGroupValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  selectUsersGroupItems: selectUsersGroupValues(state),

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAdminUsersGroup: handleUpdateAdminUsersGroup,
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUsersGroupModal);
