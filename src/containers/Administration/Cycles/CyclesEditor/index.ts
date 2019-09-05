import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import CyclesEditor from './CyclesEditor';

import {
  AdminCycleEditorActionTypes,
  createLoadingSelector,
  handleDeleteAdminCyclesEditor,
  handleFilterCycles,
  handleSetAdminCycleEditorId,
  selectAdminCycleEditorItems,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNames.CYCLES_EDITOR_FILTER);

const loadingSelector = createLoadingSelector([
  AdminCycleEditorActionTypes.FILTER_ADMIN_CYCLES_EDITOR,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isFilterFormDirty: dirty(state),
  adminCyclesEditorItems: selectAdminCycleEditorItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setAdminCycleEditorId: handleSetAdminCycleEditorId,
    filterCycles: handleFilterCycles,
    deleteAdminCyclesEditor: handleDeleteAdminCyclesEditor,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CyclesEditor);
