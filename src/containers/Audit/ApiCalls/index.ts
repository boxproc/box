import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

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
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAuditApiCalls: handleFilterAuditApiCalls,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCalls);
