import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UiSessions from './UiSessions';

import {
  AuditUiSessionsActionType,
  createLoadingSelector,
  handleFilterAuditUiSessions,
  resetUiSessions,
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
  auditUiSessions: selectAuditUiSessions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterUiSessions: handleFilterAuditUiSessions,
    resetUiSessions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiSessions);
