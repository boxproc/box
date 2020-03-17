import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UserActivity from './UserActivity';

import {
  AuditUserActivityActionType,
  createLoadingSelector,
  handleFilterAuditUserActivity,
  resetUserActivity,
  selectAuditUserActivity,
  selectInstitutionsOptions,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AuditUserActivityActionType.FILTER_AUDIT_USER_ACTIVITY,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  auditUserActivity: selectAuditUserActivity(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAuditUserActivity: handleFilterAuditUserActivity,
    resetUserActivity,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActivity);
