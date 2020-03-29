import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UiSessions from './UiSessions';

import {
  activeItemIdSelector,
  AuditUiSessionsActionType,
  createLoadingSelector,
  handleFilterAuditUiSessions,
  handleFilterAuditUserActivityByData,
  resetUiSessions,
  selectAuditUiSessions,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  AuditUiSessionsActionType.FILTER_AUDIT_UI_SESSIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  uiSessions: selectAuditUiSessions(state),
  currentUserId: activeItemIdSelector(state),
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
