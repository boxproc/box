import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CyclesEditor from './CyclesEditor';

import {
  AdminCycleEditorActionTypes,
  createLoadingSelector,
  handleGetAdminCyclesEditor,
  handleSetAdminCycleEditorId,
  selectAdminCycleEditorItems,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminCycleEditorActionTypes.GET_ADMIN_CYCLE_EDITOR,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminCyclesEditorItems: selectAdminCycleEditorItems(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminCyclesEditor: handleGetAdminCyclesEditor,
    setAdminCycleEditorId: handleSetAdminCycleEditorId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CyclesEditor);
