import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ApiCalls from './ApiCalls';

import {
  AuditApiCallsActionTypes,
  createLoadingSelector,
  handleFilterAuditApiCalls,
  resetApiCalls,
  selectAuditApiCalls,
  selectInstitutionsOptions,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AuditApiCallsActionTypes.FILTER_AUDIT_API_CALLS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  apiCalls: selectAuditApiCalls(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterApiCalls: handleFilterAuditApiCalls,
    resetApiCalls,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCalls);
