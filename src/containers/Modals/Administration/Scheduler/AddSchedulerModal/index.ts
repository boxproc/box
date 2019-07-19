import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddSchedulerModal from './AddSchedulerModal';

import {
  closeModal,
  createLoadingSelector,
  handleAddAdminSchedulerJob,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    addAdminSchedulerJob: handleAddAdminSchedulerJob,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSchedulerModal);
