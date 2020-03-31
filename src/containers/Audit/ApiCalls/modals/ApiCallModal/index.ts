import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ApiCallModal from './ApiCallModal';

import {
  handleGetDetailsApiCalls,
  isGettingApiCallDetailsSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isGettingApiCallDetailsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDetailsApiCalls: handleGetDetailsApiCalls,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCallModal);
