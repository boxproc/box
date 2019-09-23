import { connect } from 'react-redux';

import ApiCalls from './ApiCalls';

import {
  AuditApiCallsActionTypes,
  createLoadingSelector,
  handleFilterAuditApiCalls,
  selectAuditApiCalls,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuditApiCallsActionTypes.FILTER_AUDIT_API_CALLS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  auditApiCalls: selectAuditApiCalls(state),
  filterAuditApiCalls: handleFilterAuditApiCalls,
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(ApiCalls);
