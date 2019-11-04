import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import DefineCycleEditorForm from './DefineCycleEditorForm';

import {
  createLoadingSelector,
  CycleEditorActionTypes,
  handleAddCyclesEditor,
  handleDeleteCyclesEditor,
  handleUpdateCyclesEditor,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.DEFINE_CYCLE_EDITOR);

const loadingSelector = createLoadingSelector([
  CycleEditorActionTypes.ADD_CYCLE_EDITOR,
  CycleEditorActionTypes.UPDATE_CYCLE_EDITOR,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  cyclesEditorValue: formSelector(
    state,
    'cycleType'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addCyclesEditor: handleAddCyclesEditor,
    deleteCyclesEditor: handleDeleteCyclesEditor,
    updateCyclesEditor: handleUpdateCyclesEditor,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefineCycleEditorForm);
