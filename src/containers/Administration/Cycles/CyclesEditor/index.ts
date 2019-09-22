import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CyclesEditor from './CyclesEditor';

import {
  AdminCycleEditorActionTypes,
  createLoadingSelector,
  handleDeleteAdminCyclesEditor,
  handleFilterCycles,
  selectAdminCycleEditorItems,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminCycleEditorActionTypes.FILTER_ADMIN_CYCLES_EDITOR,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminCyclesEditorItems: selectAdminCycleEditorItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCycles: handleFilterCycles,
    deleteAdminCyclesEditor: handleDeleteAdminCyclesEditor,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CyclesEditor);
