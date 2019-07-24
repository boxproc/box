import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddCyclesEditorModal from './AddCyclesEditorModal';

import {
  closeModal,
  createLoadingSelector,
  handleAddAdminCyclesEditor,
  selectAdminCycleEditorItems,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  adminCycleEditorItems: selectAdminCycleEditorItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    addAdminCyclesEditor: handleAddAdminCyclesEditor,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCyclesEditorModal);
