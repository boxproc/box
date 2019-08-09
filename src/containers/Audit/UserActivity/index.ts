import { connect } from 'react-redux';

import UserActivities from './UserActivities';

import {
  AuditUserActivityActionType,
  createLoadingSelector,
  selectAuditUserActivities,
  selectInstitutionsOptions
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuditUserActivityActionType.FILTER_AUDIT_USER_ACTIVITIES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  auditUserActivities: selectAuditUserActivities(state),
});

export default connect(
  mapStateToProps
)(UserActivities);
