import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UserActivity from './UserActivity';

import {
  AuditUserActivityActionType,
  createLoadingSelector,
  handleFilterAuditUserActivity,
  selectAuditUserActivity,
  selectInstitutionsOptions
} from 'store/domains';

import { StoreState } from 'store/StoreState';

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
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActivity);
