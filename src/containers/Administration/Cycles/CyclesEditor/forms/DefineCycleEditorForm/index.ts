import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import DefineCycleEditorForm from './DefineCycleEditorForm';

import {
  AdminCycleEditorActionTypes,
  createLoadingSelector,
  handleAddAdminCyclesEditor,
  handleDeleteAdminCyclesEditor,
  handleUpdateAdminCyclesEditor,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.DEFINE_ADMIN_CYCLE_EDITOR);

const loadingSelector = createLoadingSelector([
  AdminCycleEditorActionTypes.ADD_ADMIN_CYCLE_EDITOR,
  AdminCycleEditorActionTypes.DELETE_ADMIN_CYCLE_EDITOR,
  AdminCycleEditorActionTypes.UPDATE_ADMIN_CYCLE_EDITOR,
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
    addAdminCyclesEditor: handleAddAdminCyclesEditor,
    deleteAdminCyclesEditor: handleDeleteAdminCyclesEditor,
    updateAdminCyclesEditor: handleUpdateAdminCyclesEditor,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefineCycleEditorForm);
