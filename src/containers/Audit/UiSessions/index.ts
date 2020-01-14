import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UiSessions from './UiSessions';

import {
  AuditUiSessionsActionType,
  createLoadingSelector,
  handleFilterAuditUiSessions,
  handleFilterAuditUserActivityByData,
  resetUiSessions,
  selectActiveItemId,
  selectAuditUiSessions,
  selectInstitutionsOptions
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuditUiSessionsActionType.FILTER_AUDIT_UI_SESSIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  uiSessions: selectAuditUiSessions(state),
  currentUserId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterUiSessions: handleFilterAuditUiSessions,
    filterUserActivity: handleFilterAuditUserActivityByData,
    resetUiSessions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiSessions);
