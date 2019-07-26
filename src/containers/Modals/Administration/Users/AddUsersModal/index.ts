import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  closeModal,
  createLoadingSelector,
  handleAddAdminUser,
} from 'store/domains';
import { StoreState } from 'store/StoreState';
import AddUserModal from './AddUserModal';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
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
