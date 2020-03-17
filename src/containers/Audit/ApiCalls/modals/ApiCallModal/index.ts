import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ApiCallModal from './ApiCallModal';

import {
  AuditApiCallsActionTypes,
  createLoadingSelector,
  handleGetDetailsAuditApiCalls,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AuditApiCallsActionTypes.GET_DETAILS_AUDIT_API_CALLS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDetailsApiCalls: handleGetDetailsAuditApiCalls,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCallModal);
