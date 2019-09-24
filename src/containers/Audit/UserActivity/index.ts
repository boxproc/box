import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UserActivities from './UserActivities';

import {
  AuditUserActivityActionType,
  createLoadingSelector,
  handleFilterAuditUserActivities,
  selectAuditUserActivities,
  selectInstitutionsOptions
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuditUserActivityActionType.FILTER_AUDIT_USER_ACTIVITY,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  auditUserActivities: selectAuditUserActivities(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAuditUserActivities: handleFilterAuditUserActivities,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActivities);
