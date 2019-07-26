import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditCyclesEditorModal from './EditCyclesEditorModal';

import {
  AdminCycleEditorActionTypes,
  closeModal,
  createLoadingSelector,
  handleDeleteAdminCyclesEditor,
  handleUpdateAdminCyclesEditor,
  selectCycleEditorValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminCycleEditorActionTypes.DELETE_ADMIN_CYCLE_EDITOR,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  cyclesEditorValues: selectCycleEditorValues(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteAdminCyclesEditor: handleDeleteAdminCyclesEditor,
    updateAdminCyclesEditor: handleUpdateAdminCyclesEditor,
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCyclesEditorModal);
