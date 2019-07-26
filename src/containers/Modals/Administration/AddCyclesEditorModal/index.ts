import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

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
const formSelector = formValueSelector(formNames.DEFINE_ADMIN_CYCLE_EDITOR);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  adminCycleEditorItems: selectAdminCycleEditorItems(state),
  cyclesEditorValue: formSelector(
    state,
    'cycleType'
  ),
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
