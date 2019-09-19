import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';

import ApiCalls from './ApiCalls';

import {
  AuditApiCallsActionTypes,
  createLoadingSelector,
  handleSetAuditApiCallId,
  selectAuditApiCalls,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuditApiCallsActionTypes.FILTER_AUDIT_API_CALLS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  auditApiCalls: selectAuditApiCalls(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setAuditApiCallId: handleSetAuditApiCallId,
  },
  dispatch
);

// handleSetAuditApiCallId

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCalls);
