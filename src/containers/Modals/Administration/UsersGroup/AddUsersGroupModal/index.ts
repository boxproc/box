import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  closeModal,
  createLoadingSelector,
  handleAddAdminUsersGroup,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';
import AddUsersGroupModal from './AddUsersGroupModal';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    addAdminUsersGroup: handleAddAdminUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUsersGroupModal);
