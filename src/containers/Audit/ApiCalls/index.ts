import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ApiCalls from './ApiCalls';

import {
  apiCallsSelector,
  handleFilterApiCalls,
  isLoadingApiCallsSelector,
  IStoreState,
  resetApiCalls,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isLoadingApiCallsSelector(state),
  apiCalls: apiCallsSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterApiCalls: handleFilterApiCalls,
    resetApiCalls,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCalls);
