import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import UserActivitiesFilterForm from './UserActivitiesFilterForm';

import {
  AuditUserActivityActionType,
  createLoadingSelector,
  handleFilterAuditUserActivities,
  handleGetAuditUsers,
  selectAuditUsers,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNames.AUDIT_USER_ACTIVITIES_FILTER);

const loadingSelector = createLoadingSelector([
  AuditUserActivityActionType.GET_AUDIT_USERS,
  AuditUserActivityActionType.FILTER_AUDIT_USER_ACTIVITIES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoadingUsers: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  auditUsersOptions: selectAuditUsers(state),
  currentInstitution: formSelector(
    state,
    'institutionId'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAuditUsers: handleGetAuditUsers,
    filterAuditUserActivities: handleFilterAuditUserActivities,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActivitiesFilterForm);
