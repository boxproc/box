import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CyclesEditor from './CyclesEditor';

import {
  createLoadingSelector,
  CycleEditorActionTypes,
  handleDeleteCyclesEditor,
  handleFilterCycles,
  resetCycles,
  selectCycleEditorItems,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  CycleEditorActionTypes.FILTER_CYCLES_EDITOR,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  cyclesEditorItems: selectCycleEditorItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCycles: handleFilterCycles,
    deleteCyclesEditor: handleDeleteCyclesEditor,
    resetCycles,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CyclesEditor);
